import { Container, LogoContainer, SearchContainer, ButtonsContainer,Modal, ModalContent } from "./styles";

import { HiBars3 } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMic } from "react-icons/io";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { LuBell } from "react-icons/lu";
import Youtube from "../../assets/youtube.png";

import { useMenu } from "../../context/openMenu";
import { useAuth } from "../../context/userContext";
import { ITEMS_MENU_YOUR } from "../../utils/itemsMenu";

import { Button } from "../Button";
import { ItemMenu } from "../ItemMenu";

import { Link } from "react-router-dom";

export function Header(){
    const { openMenu, setOpenMenu, setOpenMenuModal, openMenuModal } = useMenu() 
    const { login, setLogin, userData, setUserData , setCreated} = useAuth() 


    function handleLogout(){

        localStorage.removeItem("@appyoutube:token")
        localStorage.removeItem("@appyoutube:user")

        setUserData({})
        setLogin(false)
        setCreated(false)
        setOpenMenuModal(false)
    }

    return(
        <Container>
            <LogoContainer>
                <Button 
                    icon={HiBars3}
                    type="button"
                    onClick={() => setOpenMenu(!openMenu)}
                />
                <Link to="/">
                    <img src={Youtube} alt="Youtube"/>
                </Link>
            </LogoContainer>

            <SearchContainer>
                <input placeholder="Pesquisar"/>
                <div>
                    <Button
                        type="button"
                        icon={IoSearchOutline}
                    />
                </div>
                <Button
                    type="button"
                    icon={IoIosMic}
                    margin={"0 0 0 1rem"}
                />
            </SearchContainer>

            <ButtonsContainer>
                <div>
                    <Button
                        type="button"
                        icon={MdOutlineVideoCameraFront}
                        />
                    <Button
                        type="button"
                        icon={LuBell}
                    />

                    {
                        login?  
                        <Button
                            type="button"
                            text={userData.name[0]}
                            onClick={() => setOpenMenuModal(!openMenuModal)}
                        />
                    :
                        <Link to="/login">Fazer login</Link>  
                    }
                </div>
            
                <div>
                    <Modal openmenumodal={openMenuModal}>
                            {
                                login?  
                                <div>
                                    <Button
                                        type="button"
                                        text={userData? `${userData.name[0]}` : ""}
                                        onClick={() => setOpenMenuModal(!openMenuModal)}
                                    />
                                    <div>
                                        <h2>{userData.name}</h2>
                                        <h3>{userData.email}</h3>
                                    </div>
                          
                                </div>
                            :
                               ""
                            }
                        <ModalContent>
                            {
                                ITEMS_MENU_YOUR.map((item, index) => (
                                    <Link to={item.link} key={index}>
                                        <ItemMenu
                                            icon={item.icon}
                                            text={item.text}
                                        />
                                    </Link>
                                ))
                            }
                            <span onClick={handleLogout}> <IoIosLogOut/> Sair</span>
                        </ModalContent>
                    </Modal>
                </div>
            </ButtonsContainer>
        </Container>
    )
};