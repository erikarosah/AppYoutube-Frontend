import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
    
    padding: .5rem;
    border-radius: .5rem;
    text-align: center;

    &:hover{
        background-color: ${({theme}) => theme.COLORS.GRAY};
    }

    > svg {
        font-size: 2rem;
    }
`;