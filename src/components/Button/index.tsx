import { Container } from "./styles";

interface Props {
    margin?: string,
    text?: string,
    type: string,
    icon?: React.ComponentType,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
};

export function Button({ margin, text, type, icon:Icon, ...rest} : Props) {
    return(
        <Container {...rest} margin={margin? margin : ""}>
            {text && text}
            {Icon && <Icon/>}
        </Container>
    )
};