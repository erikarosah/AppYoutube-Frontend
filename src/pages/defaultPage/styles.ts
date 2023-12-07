import styled from "styled-components";


interface ContainerProps {
    openmenu?: boolean,
};

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;

    gap: 1rem;   
`;

export const Content = styled.div<ContainerProps>`  
    div {
        width: ${({openmenu}) => openmenu? "80%" : "90%"}; 
        display: flex;
        justify-content: center;

        > div {
            width: 30rem;
            height: 50rem;
            align-items: center;
    
            > div {
                display: none;
            }
        } 

    }
`;

export const Controls = styled.div`  

    display: flex;
    flex-direction: column;

    gap: 1rem;

    > button {
        align-self: flex-start;
        margin-left: 2rem;
    }
`;