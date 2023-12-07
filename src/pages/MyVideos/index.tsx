import { Content,  VideosContent, Videos} from "./styles";

import { CardVideo } from "../../components/cardVideo";
import { Button } from "../../components/Button";

import { useMenu } from "../../context/openMenu";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { FaTrashAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import { useAuth } from "../../context/userContext";
import api from "../../services/api";

export function MyVideos() {
  const [ userVideos, setUserVideos ] = useState<any>([])
  const [ search, setSearch ] = useState<any>([])

  const { userData, login } = useAuth()
  const { openMenu, setOpenMenu } = useMenu()

  const navigate = useNavigate()

  async function getVideos(){
    try {
      const response = await api.get(`/videos/${userData.id}`)
      setUserVideos(response.data)

    } catch (error) {
      console.log("Não foi possível retornar os vídeos:", error)
    }      
  }

  async function deleteVideo(videoId: number){
    const confirm = window.confirm("Deseja realmente apagar?")

    if(confirm){
      try {
        await api.delete(`/videos/${videoId}`)
        getVideos()
        alert("Vídeo deletado com sucesso")
        navigate("/")

      } catch (error) {
        console.log("Não foi possível apagar vídeo:", error)
      }
    } 
  }

  useEffect(() => {
    if(login){
      getVideos()
    }
  }, [login])

  useEffect(() => {
    async function handleSearch(){
      try {
        const response = await api.get(`/videos/?search=${search}`)
        setUserVideos(response.data)

      } catch (error) {
        console.log("Não foi possível retornar os vídeos:", error)
      }   
      
      setOpenMenu(false)
    }
    handleSearch()
  }, [search])


  return (
    <>
      
      <Content>
        <VideosContent openmenu={openMenu}> 
        {
          login ?
          <>
            <div>
                <Button
                  type="button"
                  text={userData.name[0]}
                />
              <div>
                  <h2>{userData.name}</h2>
                  <h3>{userData.email}</h3>
              </div>
              <form>
                <input 
                  placeholder="Título do vídeo"
                  onChange={e => setSearch(e.target.value)}
                />
                <IoSearchOutline/>
              </form>
            </div>
            <Link to="/">Voltar</Link>
            <Videos openmenu={openMenu}>
              {
                
                userVideos[0]?  userVideos.map((item: any) => (
                    <div key={item.id}>
                      <Button
                        icon={FaTrashAlt}
                        type="button"
                        onClick={() => deleteVideo(item.id)}
                      />
                      <CardVideo
                        bannerImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-JFWNGxHP-8_Szm640kkgdzHSIqhyTn343Q&usqp=CAU"}
                        channelImg={"https://cdn-icons-png.flaticon.com/512/3364/3364044.png"}
                        title={item.title}
                        channelName={userData.name}
                        views={item.description}
                      />
                    </div>
                ))
              : 
                <h2>Você ainda não tem vídeos <Link to="/send-video">clique aqui</Link> para enviar seu primeiro vídeo</h2>
              }
            </Videos>
          </>
        :
          <h2>Faça login para ver seus vídeos</h2>
        }
        </VideosContent>
      </Content>
    </>
  );
}