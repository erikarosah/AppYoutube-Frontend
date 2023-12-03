import { Content, Videos, Menu } from "./styles";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { useMenu } from "../../context/openMenu";
import { CardMenu } from "../../components/cardMenu";
import { ITEMS_CARD_MENU } from "../../utils/itemsMenu";

function App() {
  const { openMenu } = useMenu() 

  return (
    <>
      <Header/>
      <Content>
        <SideMenu/>
          <Menu>
            {
              ITEMS_CARD_MENU.map((item, index) => (
                  <CardMenu
                    key={index}
                    icon={item.icon}
                    text={item.text}
                  />
              ))
            }
          </Menu>
        <Videos openmenu={openMenu}></Videos>
      </Content>
    </>
  );
}

export default App;
