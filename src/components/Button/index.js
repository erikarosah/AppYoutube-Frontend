import { Container } from "./styles";

export function Button({ icon:Icon, text, margin ,...rest}){
    return(
        <Container {...rest} margin={margin}>
            {text && text}
            {Icon && <Icon size={20}/>}
        </Container>
    )
};