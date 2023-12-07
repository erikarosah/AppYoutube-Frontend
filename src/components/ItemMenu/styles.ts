import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    padding: 1rem;
    gap: 1rem;
    border-radius: .8rem;
    font-size: 1.2rem;
    margin-bottom: .5rem;
    cursor: pointer;

    transition: background-color .4s;

    &:hover{
        background-color: ${({theme}) => theme.COLORS.GRAY};
    }

    > svg {
        font-size: 1.7rem;
    }
`;