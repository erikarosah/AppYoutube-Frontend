import { Container, ChannelImage, ChannelInfos, Title, ChannelName, Views } from "./styles";

interface Props {
    bannerImg: string,
    channelImg?: string, 
    title: string, 
    channelName: string, 
    views?: string
};

export function CardVideo(props: Props){
    return(
        <Container>
            <img src={props.bannerImg} alt="Banner" />

            <main>
                <ChannelImage src={props.channelImg} alt="Imagem do canal" />
                <ChannelInfos>
                    <Title>{props.title}</Title>
                    <ChannelName>{props.channelName}</ChannelName>
                    <Views>{props.views}</Views>
                </ChannelInfos>
            </main>
        </Container>
    )
};