import { Container, Content } from "./styles";

import { FaAngleRight } from "react-icons/fa6";

import { ItemMenu } from "../ItemMenu";
import { useMenu } from "../../context/openMenu";

import { Link } from "react-router-dom";

import { 
    ITEMS_MENU_HEADER,
    ITEMS_MENU_YOUR,
    ITEMS_MENU_EXPLORER,
} from "../../utils/itemsMenu";

export function SideMenu(){
    const { openMenu, setOpenMenu } = useMenu() 

    return(
        <Container openmenu={openMenu}>    
            <Content>
                {
                    ITEMS_MENU_HEADER.map((item, index) => (
                        <Link to={item.link} key={index} onClick={() => setOpenMenu(false)}>
                            <ItemMenu
                                icon={item.icon}
                                text={item.text}
                            />
                        </Link>
                    ))
                }
            </Content>
            <Content>
                <h3>Você <FaAngleRight/></h3>
                {
                    ITEMS_MENU_YOUR.map((item, index) => (
                        <Link to={item.link} key={index} onClick={() => setOpenMenu(false)}>
                            <ItemMenu
                                icon={item.icon}
                                text={item.text}
                            />
                        </Link>

                    ))
                }
            </Content>
            <Content>
                <h3>Explorar </h3>
                {
                    ITEMS_MENU_EXPLORER.map((item, index) => (
                        <Link to={item.link} key={index} onClick={() => setOpenMenu(false)}>
                            <ItemMenu
                                icon={item.icon}
                                text={item.text}
                            />
                        </Link>
                    ))
                }
            </Content>
        </Container>
    )
};