import { Container } from "./styles";

interface Props {
    text: string,
    icon: React.ComponentType,
};

export function CardMenu({icon: Icon, text}: Props){
    return(
        <Container>
            <Icon/>
            {text}
        </Container>
    )
};