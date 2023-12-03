import { Container } from "./styles";

export function ItemMenu({icon: Icon, text}){
    return(
        <Container>
            <Icon size={20}/>
            {text}
        </Container>
    )
};