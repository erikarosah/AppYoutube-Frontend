import { createContext, useContext, useState } from "react";

interface MenuContextType {
    openMenu: boolean;
    setOpenMenu: (value: boolean) => void;
}
  
interface MenuContextProps {
    children: React.ReactNode;
}

const MenuContext = createContext<MenuContextType>({
    openMenu: false,
    setOpenMenu: () => {},
} as MenuContextType);

function MenuContextProvider({children}: MenuContextProps){
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