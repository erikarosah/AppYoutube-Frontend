import { Container, Content, Inputs, Buttons } from "./styles";

import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { useAuth } from "../../context/userContext";

export function Register(){
    const navigate = useNavigate()

    const { createAccount, created } = useAuth()

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    async function handleCreateAccount(name: string, email: string, password: string){
        try {
            createAccount(name, email, password)
            if(created){
                navigate("/login")
            }
            
        } catch (error) {
            alert("Não foi possível criar conta")
        }
    }

    return(
        <Container>
            <Content>
                <div>
                    <img src="https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png" alt="Google"/>
                    <span>Crie uma conta com Google</span>
                    <h3>Insira seus dados</h3>
                </div>
                <Inputs>
                    <form>
                        <input 
                            placeholder="Nome"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            autoComplete="on"
                        />
                        <input 
                            placeholder="E-mail"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            autoComplete="on"
                        />
                        <input 
                            placeholder="Senha"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="on"
                        />
                    </form>
                </Inputs>
                <Buttons>
                    <button onClick={() => navigate("/login")}>Já tenho conta</button>
                    <button onClick={() => handleCreateAccount(name, email, password)}>Criar</button>
                </Buttons>
            </Content>
        </Container>
    )
};