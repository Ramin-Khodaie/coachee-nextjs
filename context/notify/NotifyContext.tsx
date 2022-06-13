import { createContext } from "react";

const contextValue = {
    notify:(message:string)=>{}
}

export const NotifyContext = createContext(contextValue)