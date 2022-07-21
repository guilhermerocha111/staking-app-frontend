import React, {useReducer, createContext, useMemo} from "react";
import useActions from "../../hooks/useActions";
import baseReducer from "../../utils/baseReducer";
import actionCreators from "../actions";
import {reducers, initialState} from "../reducers";
import {types} from "../types";

export const Context = createContext();

export const ContextProvider = ({customReducers = null, children}) => {
    const memoReducers = useMemo(
        () => baseReducer(reducers, customReducers),
        [customReducers]
    );
    const [state, dispatch] = useReducer(memoReducers, initialState);
    const actions = useActions(types, dispatch, actionCreators);

    return (
        <Context.Provider value={[state, actions]}>
            {children}
        </Context.Provider>
    );
};
