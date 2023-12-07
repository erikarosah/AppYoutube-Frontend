import { createContext, useContext, useState } from "react";

interface MenuContextType {
    openMenu: boolean,
    openMenuModal: boolean,
    
    setOpenMenu: (value: boolean) => void,
    setOpenMenuModal: (value: boolean) => void
};
  
interface MenuContextProps {
    children: React.ReactNode
};

const MenuContext = createContext<MenuContextType>({
    openMenu: false,
    openMenuModal: false,

    setOpenMenu: () => {},
    setOpenMenuModal: () => {}

} as MenuContextType);

function MenuContextProvider({children}: MenuContextProps){
    const [ openMenu, setOpenMenu ] = useState(false)
    const [ openMenuModal, setOpenMenuModal ] = useState(false)

    return(
        <MenuContext.Provider value={
            {   openMenu, 
                openMenuModal, 
                setOpenMenu, 
                setOpenMenuModal
            }}>
            {children}
        </MenuContext.Provider>
    )
};

function useMenu(){
    const context = useContext(MenuContext)
    return context
};

export {useMenu, MenuContextProvider};