import { useContext } from "react";
import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({children})=>{
    const name = "Akash";
    const age = 22;

    return (
        <BioContext.Provider value={{name , age}}> {children}

        </BioContext.Provider>
    )
}

// Custom Hook
export const useBioContext = ()=>{
    const context = useContext(BioContext);
    if(context === undefined){
        throw new Error("BioProvider ke Andar daal Subko ❤️day");
    }
    return context;
}