const params = new URLSearchParams(window.location.search);

/**
 * @param {string} key
 * @returns {*}
 */
export default (key) => params.get(key);
