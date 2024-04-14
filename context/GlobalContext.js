'use client'
import { createContext,useContext,useState } from "react";

//create context 
const GlobalContext = createContext();
//Create a provider 
export function GlobalProvider({children}){
    const [unRead,setUnReadCount] = useState(0);
    return(
        <GlobalContext.Provider value={{
            unRead,
            setUnReadCount
        
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

//Create a custom hook to use the context
export function useGlobalContext(){
    return useContext(GlobalContext);
}