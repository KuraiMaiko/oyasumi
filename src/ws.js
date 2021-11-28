import getUrlParam from 'Utils/getUrlParam';

const wsUrl = getUrlParam('ws');
let ws = null;
let queue = [];
let rseqCounter = 0;
const responsePromises = {};
const subscribers = {};
let sendMessage = null;
let eventsStarted = false;

if (wsUrl) {
    /**
     * @param {Object} obj
     * @returns {void}
     */
    sendMessage = (obj) => {
        if (queue) {
            queue.push(obj);
        } else {
            ws.send(JSON.stringify(obj));
        }
    };

    /**
     * @returns {void}
     */
    const connectWs = () => {
        ws = new WebSocket(wsUrl);

        ws.addEventListener('error', (e) => {
            console.error(e);
        });

        ws.addEventListener('open', () => {
            console.log('Connected!');

            const q = queue;

            queue = null;

            for (const msg of q) {
                sendMessage(msg);
            }
        });

        ws.addEventListener('message', (msg) => {
            try {
                msg = JSON.parse(msg.data);
            } catch (error) {
                console.error('Invalid message received:', msg);

                return;
            }

            if (msg.rseq !== undefined && responsePromises[msg.rseq]) {
                responsePromises[msg.rseq](msg);
                delete responsePromises[msg.rseq];
            } else {
                processEvent(msg);
            }
        });

        ws.addEventListener('close', () => {
            queue = [];

            console.log('Trying to reconnect...');
            // Don't spam the server with retries.
            setTimeout(() => {
                connectWs();
            }, 300);
        });
    };

    connectWs();
} else {
    /**
     * @param {Object} obj
     * @param {Function} cb
     * @returns {void}
     */
    sendMessage = (obj, cb) => {
        if (queue) {
            queue.push([obj, cb]);
        } else {
            OverlayPluginApi.callHandler(JSON.stringify(obj), cb);
        }
    };

    /**
     *@returns {void}
     */
    const waitForApi = () => {
        if (!window.OverlayPluginApi || !window.OverlayPluginApi.ready) {
            setTimeout(waitForApi, 300);

            return;
        }

        const q = queue;

        queue = null;

        window.__OverlayCallback = processEvent;

        for (const [msg, resolve] of q) {
            sendMessage(msg, resolve);
        }
    };

    waitForApi();
}

/**
 * @param {Object} msg
 * @returns {void}
 */
const processEvent = (msg) => {
    if (subscribers[msg.type]) {
        for (const sub of subscribers[msg.type]) {
            sub(msg);
        }
    }
};

window.dispatchOverlayEvent = processEvent;

/**
 * @param {Object} event
 * @param {Function} cb
 * @returns {void}
 */
window.addOverlayListener = (event, cb) => {
    if (eventsStarted && subscribers[event]) {
        console.warn(`A new listener for ${event} has been registered after event transmission has already begun.
Some events might have been missed and no cached values will be transmitted.
Please register your listeners before calling startOverlayEvents().`);
    }

    if (!subscribers[event]) {
        subscribers[event] = [];
    }

    subscribers[event].push(cb);
};

/**
 * @param {Object} event
 * @param {Function} cb
 * @returns {void}
 */
window.removeOverlayListener = (event, cb) => {
    if (subscribers[event]) {
        const list = subscribers[event];
        const pos = list.indexOf(cb);

        if (pos > -1) {
            list.splice(pos, 1);
        }
    }
};

/**
 * @param {Object} msg
 * @returns {Promise}
 */
window.callOverlayHandler = (msg) => {
    let p;

    if (ws) {
        msg.rseq = rseqCounter++;
        p = new Promise((resolve, reject) => {
            responsePromises[msg.rseq] = resolve;
        });

        sendMessage(msg);
    } else {
        p = new Promise((resolve) => {
            sendMessage(msg, (data) => {
                resolve(data === null ? null : JSON.parse(data));
            });
        });
    }

    return p;
};

/**
 * @returns {void}
 */
window.startOverlayEvents = () => {
    eventsStarted = false;

    sendMessage({
        call: 'subscribe',
        events: Object.keys(subscribers),
    });
};
