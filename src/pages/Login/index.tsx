import { Container, Content, Inputs, Buttons } from "./styles";

import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { useAuth } from "../../context/userContext";

export function Login(){
    const navigate = useNavigate()

    const { handleLogin, login } = useAuth()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    async function handleSession(email: string, password: string){
        handleLogin(email, password)

        if(login){
            navigate("/")
        }
    }
   
    return(
        <Container>
            <Content>
                <div>
                    <img src="https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png" alt="google"/>
                    <span>Faça Login com Google</span>
                    <h3>Prossiga no Youtube</h3>
                </div>

                <Inputs>
                    <form>
                        <input 
                            placeholder="E-mail"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="on"
                            />
                        <input 
                            placeholder="Senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="on"
                        />
                    </form>
                </Inputs>
                <Buttons>
                    <button onClick={() => navigate("/register")}>Criar conta</button>
                    <button onClick={() => handleSession(email, password)}>Entrar</button>
                </Buttons>
            </Content>
        </Container>
    )
};