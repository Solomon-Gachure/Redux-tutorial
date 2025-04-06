import { useContext, createContext,  useReducer } from "react";

const CounterContext = createContext();

const counterReducer = (state, action) =>{
    switch (action.type){
        case "INCREMENT":
            return {...state, count:state.count +1};
        case "DECREMENT":
            return {...state, count:state.count -1};
        case "RESET":
            return {...state, count:0};
        
    }
}
export const CounterProvider = ({children}) =>{

    const [state, dispatch] = useReducer(counterReducer, {count:0});

    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => useContext(CounterContext);
