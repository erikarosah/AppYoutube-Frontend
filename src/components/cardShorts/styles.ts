import styled from "styled-components";

interface ContainerProps {
    openmenu: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 17rem;
    height: 35rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
 
    > img {
        width: 100%;
        height: 80%;
        border-radius: .8rem;
    }

    > div {
        height: 16%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > h2 {
            width: 100%;

            margin-bottom: 1rem;
            font-size: 1.2rem;
            padding-top: .5rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }


        > span {
            font-size: 1rem;
            color: #606060;
        }
    }
`;
