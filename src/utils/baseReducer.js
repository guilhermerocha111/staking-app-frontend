const baseReducer = (handlers = {}, customHandlers = {}) => {
    const mergedHandlers = { ...handlers, ...customHandlers };
    return (state = {}, { type, payload }) => {
        try {
            return mergedHandlers[type]
                ? mergedHandlers[type](state, payload)
                : state;
        } catch (e) {
            return state;
        }
    };
};

export default baseReducer;
