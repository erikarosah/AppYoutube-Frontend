import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

function MenuContextProvider({children}){
    const [ openMenu, setOpenMenu ] = useState(false)

    return(
        <MenuContext.Provider value={{openMenu, setOpenMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

function useMenu(){
    const context = useContext(MenuContext)
    return context
}
export {useMenu, MenuContextProvider}