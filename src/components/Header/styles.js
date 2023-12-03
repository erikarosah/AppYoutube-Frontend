import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 6rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem;
    
    position: fixed;
    z-index: 1;
    background-color: ${({theme}) => theme.COLORS.WHITE_100};
`;

export const LogoContainer = styled.div`
    min-width: 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
 
    gap: 1rem;

    > img {
        width: 10rem;
        height: auto;
        cursor: pointer;
    }
`;

export const SearchContainer = styled.div`
    min-width: 45%;
    height: 3.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    > input {
        width: 90%;
        height: 100%;

        border-radius: 2rem 0 0 2rem;
        outline: none;
        border: none;
        padding: 0 1rem;
        border: .1rem solid ${({theme}) => theme.COLORS.GRAY};
    }

    > div{
        height: 3.5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border: .1rem solid ${({theme}) => theme.COLORS.GRAY};
        border-radius:  0 2rem 2rem 0;

        transition: background-color .4s;

        &:hover{
            background-color: ${({theme}) => theme.COLORS.GRAY};
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;