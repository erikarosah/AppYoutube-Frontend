import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    padding: .5rem 1rem;
    gap: 1rem;
    border-radius: .8rem;
    font-size: 1.4rem;
    margin-bottom: .5rem;
    cursor: pointer;

    transition: background-color .4s;

    &:hover{
        background-color: ${({theme}) => theme.COLORS.GRAY};
    }
`;