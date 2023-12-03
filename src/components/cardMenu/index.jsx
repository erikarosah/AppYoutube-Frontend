import { Container } from "./styles";

export function CardMenu({icon: Icon, text}){
    return(
        <Container>
            <Icon size={20}/>
            {text}
        </Container>
    )
};