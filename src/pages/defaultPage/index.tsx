import { Container } from "./styles";
import { Link, useParams } from "react-router-dom"

export function DefaultPage(){
    const params = useParams()
    const stringParams = JSON.stringify(params).replaceAll('{"*":"','').replaceAll('"}', '')
    
    return(
        <Container>
            <h1>Página {stringParams}</h1>
            <Link to="/" >Voltar para página inicial</Link>
        </Container>
    )
};