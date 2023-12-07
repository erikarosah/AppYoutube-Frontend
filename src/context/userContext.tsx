import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

interface UserContextProps {
    children: React.ReactNode;
};

const UserContext = createContext<any>({});

function UserContextProvider({children} : UserContextProps) {

    const [ login, setLogin ] = useState(false)
    const [ created, setCreated ] = useState(false)
    const [ userData, setUserData] = useState<any>({})
    const [ userVideos, setUserVideos] = useState<any>([{}])
    
    async function handleLogin(email: string, password: string){
        try {
            const response = await api.post("/session", {email, password})
            const { token, user } = response.data

            localStorage.setItem("@appyoutube:token", token)
            localStorage.setItem("@appyoutube:user", JSON.stringify(user))

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setUserData(user)
            setLogin(true)

        } catch (error) {
            return alert(`Verifique os dados e tente novamente: ${error}`)
        }
    }

    async function createAccount(name:string, email: string, password: string){
        try {
            await api.post("/users", {name, email, password})
            alert("Usuário criado com sucesso")
            setCreated(true)

        } catch (error) {
            return alert(`Erro ao criar usuário : ${error}`)
        }
    }

    async function createVideo(title: string, description: string){
        try {
            await api.post(`/videos/${userData.id}`, {title, description})
            alert("Vídeo criado com sucesso")
           
        } catch (error) {
            console.log("Não foi possível enviar vídeo:", error)
        }
    }

    async function showVideo(){
        try {
            const response = await api.get(`/videos/${userData.id}`)

            setUserVideos(response.data)
  
        } catch (error) {
            console.log("Não foi possível retornar os vídeos:", error)
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@appyoutube:user")
        const token = localStorage.getItem("@appyoutube:token")

        if(user && token){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setUserData(JSON.parse(user))
            setLogin(true)
        }
    },[])

    return(
        <UserContext.Provider value={
            {   login, 
                created,
                userData, 
                userVideos,
                setLogin, 
                setCreated,
                setUserData, 
                handleLogin, 
                createAccount, 
                createVideo,
                showVideo
            }}>
            {children}
        </UserContext.Provider>
    )
};

function useAuth(){
    const context = useContext(UserContext)
    return context
};

export {useAuth, UserContextProvider};