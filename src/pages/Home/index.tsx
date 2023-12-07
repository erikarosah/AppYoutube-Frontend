import { Content, PagesContent,  VideosContent, Menu, Filter, Videos, Controls, BtnLeft, BtnRight,Shorts } from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { CardMenu } from "../../components/cardMenu";
import { CardVideo } from "../../components/cardVideo";
import { CardShorts } from "../../components/cardShorts";

import { useMenu } from "../../context/openMenu";
import { ITEMS_CARD_MENU } from "../../utils/itemsMenu";

import { Link, Outlet } from "react-router-dom";
import { useState, useRef } from "react";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

import { ITEMS_FILTER } from "../../utils/itemsFilter";
import { ITEMS_SHORTS} from "../../utils/itemsShorts";
import { ITEMS_VIDEOS } from "../../utils/itemsVideos";
import { Footer } from "../../components/Footer";


function Home() {
  const { openMenu } = useMenu() 
  const carousel = useRef<any>()
  const [ btnLeftActive, setBtnLeftActive ] = useState(false)
  const [ btnRightActive, setBtnRightActive ] = useState(true)
 
  const handleLeftClick = () => {
    setBtnLeftActive(false)
    setBtnRightActive(true)

   carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = () => {
    setBtnLeftActive(true)
    setBtnRightActive(false)
    carousel.current.scrollLeft += carousel.current.offsetWidth

  }

  return (
    <>
      <Header/>
      <Content>
        <SideMenu/>
        <Menu>
          {
            ITEMS_CARD_MENU.map((item, index) => (
              <Link to={item.link} key={index} >
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

          <Filter ref={carousel}>
            {
              ITEMS_FILTER.map((item, index) => (
                <span 
                  key={index}>
                  {item.name}
                </span>
              ))
            }

            <Controls >
              <BtnLeft btnleftctive={btnLeftActive} onClick={handleLeftClick} ><FaAngleLeft/></BtnLeft>
              <BtnRight  btnrightactive={btnRightActive}  onClick={handleRightClick}><FaAngleRight/></BtnRight>
            </Controls>
          </Filter>

          <Videos openmenu={openMenu}>
            {ITEMS_VIDEOS.map((item, index) => (
              <CardVideo key={index}
                bannerImg={item.bannerImg}
                channelImg={item.channelImg}
                title={item.title}
                channelName={item.channelName}
                views={item.views}
              />
            ))}
          </Videos>

          <Shorts openmenu={openMenu}>
            <h2><SiYoutubeshorts/> Shorts</h2>
            <div>
              {
                ITEMS_SHORTS.map((item, index) => (
                  <CardShorts key={index}
                  title={item.title}
                  span={item.views}
                  src={item.src}
                  />
                ))
              }
            </div>
          </Shorts>
        </VideosContent>
      </Content>
      <Footer/>
    </>
  );
}

export default Home;
