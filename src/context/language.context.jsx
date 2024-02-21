import { createContext, useState } from "react";

const LanguageContext = createContext()

function LanguageProviderWrapper(props) {
    const [lang, setLang] = useState("eng")
    
    const handleContentType = (selected) => {
        switch (selected) {
          case "eng":
            setLang("eng");
            break;
          case "cro":
            setLang("cro");
            break;
          case "ger":
            setLang("ger");
            break;
          }
        };
    
    return (
        <LanguageContext.Provider value={{lang, handleContentType}}>
        {props.children}
        </LanguageContext.Provider>
            )
    
}


export {LanguageContext, LanguageProviderWrapper}