const tryResolve = (name) => {
    try {
        require.resolve(name);
        return true;
    } catch {
        return false;
    }
};

module.exports = {
    tryResolve
};
