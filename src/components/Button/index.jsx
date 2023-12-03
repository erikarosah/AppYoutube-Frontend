import { Container } from "./styles";


export function Button({ margin, text, icon:Icon, ...rest}) {
    return(
        <Container {...rest} margin={margin}>
            {text && text}
            {Icon && <Icon size={20}/>}
        </Container>
    )
};