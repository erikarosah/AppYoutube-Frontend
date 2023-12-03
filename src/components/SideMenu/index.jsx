import { Container, Content } from "./styles";
import { ItemMenu } from "../ItemMenu";
import { FaAngleRight } from "react-icons/fa6";

import { 
    ITEMS_MENU_HEADER,
    ITEMS_MENU_YOUR,
    ITEMS_MENU_EXPLORER
} from "../../utils/itemsMenu";
import { useMenu } from "../../context/openMenu";

export function SideMenu(){
    const { openMenu } = useMenu() 

    return(
        <Container openmenu={openMenu}>       
            <Content>
                {
                    ITEMS_MENU_HEADER.map((item, index) => (
                        <ItemMenu
                            key={index}
                            icon={item.icon}
                            text={item.text}
                        />
                    ))
                }
            </Content>
            <Content>
                <h3>Você <FaAngleRight/></h3>
                {
                    ITEMS_MENU_YOUR.map((item, index) => (
                        <ItemMenu
                            key={index}
                            icon={item.icon}
                            text={item.text}
                        />
                    ))
                }
            </Content>
            <Content>
                <h3>Explorar </h3>
                {
                    ITEMS_MENU_EXPLORER.map((item, index) => (
                        <ItemMenu
                            key={index}
                            icon={item.icon}
                            text={item.text}
                        />
                    ))
                }
            </Content>
        </Container>
    )
};