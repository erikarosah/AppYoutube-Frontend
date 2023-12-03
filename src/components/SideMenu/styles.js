import styled from "styled-components";

export const Container = styled.div`
    min-width: 25rem;
    height: 100vh;
    overflow: hidden;

    padding: 0 1rem;
    margin-top: 6rem;
    
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1;

    transition: transform .4s;
    transform: ${({openmenu}) => openmenu? "translateX(0)" : "translateX(-100%)"};
   

    background-color: ${({theme}) => theme.COLORS.WHITE_100};
 
    &:hover{
        overflow-y: auto;
    }
    
`;

export const Content = styled.div`
    border-bottom: .1rem solid ${({theme}) => theme.COLORS.GRAY};
    margin-bottom: 2rem;
    > h3 {
        display: flex;
        align-items: center;

        gap: .5rem;
        padding: 1rem 0;
    }
`;