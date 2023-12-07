import { Container, Content, Inputs, Buttons } from "./styles";

import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { useAuth } from "../../context/userContext";

export function SendVideo(){
    const navigate = useNavigate()
    const { createVideo, login } = useAuth()
    const [ title, setTitle ] = useState("")
    const [ description, setDescription] = useState("")

    async function handleCreateVideo(title: string, description: string){
        try {
            createVideo(title, description)
            
        } catch (error) {
            alert("Não foi possível enviar vídeo")
        }
    }

    return(
        <Container>

            { 
                login?
                <Content>
                    <div>
                        <img src="https://logosmarcas.net/wp-content/plugins/psn-pagespeed-ninja/ress/s/img/wp-content/uploads/2020/04/YouTube-Logo-650x366.png.webp" alt="Youtube"/>
                        <span>Insira os dados do seu vídeo</span>
                    </div>
                    <Inputs>
                    <form>
                        <input 
                            placeholder="Título"
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <textarea 
                            placeholder="Descrição (opcional)"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </form>
                    </Inputs>
                    <Buttons>
                        <button onClick={() => navigate("/")}>Voltar</button>
                        <button onClick={() => handleCreateVideo(title, description)}>Enviar</button>
                    </Buttons>
                </Content>
            
            :
                <Content>
                    <div>
                        <img src="https://logosmarcas.net/wp-content/plugins/psn-pagespeed-ninja/ress/s/img/wp-content/uploads/2020/04/YouTube-Logo-650x366.png.webp" alt="Youtube"/>
                        <span>Faça login para enviar seu vídeo</span>
                        <Buttons>
                            <button onClick={() => navigate("/")}>Voltar</button>
                            <button onClick={() => navigate("/login")}>Login</button>
                        </Buttons>
                    </div>
                </Content>
            }
        </Container>
    )
};