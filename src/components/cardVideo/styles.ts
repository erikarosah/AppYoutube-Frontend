import styled from "styled-components";

export const Container = styled.div`
   width: 26rem;
   height: 17rem;
   margin-bottom: 8rem;

   cursor: pointer;

    > img {
        width: 100%;
        border-radius: .8rem;
    }

    > main {
        display: flex;
        gap: 1rem
    }


    &:hover {

        > img {
            transition: border-radius .2s ease-in-out;
            border-radius: 0;
        }
    }
`;

export const ChannelImage = styled.img`
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;

`;

export const ChannelInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem
`;

export const Title = styled.div`
    width: 90%;
    display: block; 
    font-size: 1.4rem;
    font-weight: bold;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ChannelName = styled.h4`
    color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const Views = styled.h4`
    color: ${({theme}) => theme.COLORS.GRAY_100}
`;