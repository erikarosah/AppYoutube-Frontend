import { Content, PagesContent,  VideosContent, Menu, Filter, Videos } from "./styles";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { useMenu } from "../../context/openMenu";
import { CardMenu } from "../../components/cardMenu";
import { CardVideo } from "../../components/cardVideo";
import { ITEMS_CARD_MENU } from "../../utils/itemsMenu";
import { Link, Outlet } from "react-router-dom"

function Home() {
  const { openMenu } = useMenu() 

  return (
    <>
      <Header/>
      <Content>
        <SideMenu/>

          <Menu>
            {
              ITEMS_CARD_MENU.map((item, index) => (
                <Link to={item.link} key={index}>
                  <CardMenu
                      icon={item.icon}
                      text={item.text}
                    />
                </Link>
              ))
            }
          </Menu>

          
        <PagesContent openmenu={openMenu}>
          <Outlet/>
        </PagesContent>

          <VideosContent openmenu={openMenu}> 
            <Filter></Filter>
            <Videos openmenu={openMenu}>
              <CardVideo
                bannerImg={"https://i.ytimg.com/vi/Ve_1XZkG65U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1S4e_lymXQduR0jMsRIfBQb2MkA"}
                channelImg={"https://yt3.ggpht.com/TwG5nf7NiaNZkFuN3Jni4UaGuzuvAdDNqaPutqDrYF4yiwM3WJH46omUIkh3yKc8CgLyOBak4Q=s68-c-k-c0x00ffffff-no-rj"}
                title="3-Hour Study with Me / Shanghai Night / Pomodoro 50-10/ mix songs pop"
                channelName="Sean Study"
                views="302 mil visualizações há 3 meses"
              />
            </Videos>
          </VideosContent>
        

      </Content>
    </>
  );
}

export default Home;
