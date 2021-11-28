/**
 * @param {*} args
 * @returns {string|undefined}
 */
export default (...args) => {
    const classes = [];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (!arg) {
            continue;
        }

        const type = typeof arg;

        if (type === 'string') {
            classes.push(arg);
        } else if (type === 'object' && !Array.isArray(arg)) {
            for (const key in arg) {
                if (arg[key] === true) {
                    classes.push(key);
                }
            }
        }
    }

    if (classes.length < 1) {
        return;
    }

    return classes.join(' ');
};
