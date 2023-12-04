import styled from "styled-components";

interface ContainerProps {
    margin: string;
}

export const Container = styled.button<ContainerProps>`
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: none;
    background-color: transparent;
    transition: background-color .4s;

    margin: ${({margin}) => margin? margin : "0"};
    
    &:hover{
        background-color: ${({theme}) => theme.COLORS.GRAY};
    }

    > svg {
        font-size: 2rem;
    }
`;