import { Container } from "./styles";
import { useMenu } from "../../context/openMenu";

interface Props {
    title: string,
    span: string,
    src:string
}

export function CardShorts({title, span, src}:Props){
    const { openMenu } = useMenu() 

    return(
        <Container openmenu={openMenu}>    
            <img src={src} alt="shorts"/>
            <div>
                <h2>{title}</h2>
                <span>{span}</span>
            </div>
        </Container >
    )
};