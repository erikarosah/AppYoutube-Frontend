import styled from "styled-components";

interface ContainerProps {
   openmenu: boolean;
}

export const Content = styled.main` 
   width: 100%;
   display: flex;

   overflow-x: hidden;
`;

export const Filter = styled.div` 
   padding: 1rem 0;
`;

export const PagesContent = styled.div<ContainerProps>` 
   width: fit-content;
   margin-top: 8.5rem;
   padding: 0 2rem;

   transition: transform .4s;
   transform: ${({openmenu}) => openmenu? "translateX(25rem)" : "translateX(8rem)"};
`;

export const VideosContent = styled.div<ContainerProps>` 
   width: fit-content;
   margin-top: 8.5rem;
   padding: 0 2rem;

   transition: transform .4s;
   transform: ${({openmenu}) => openmenu? "translateX(25rem)" : "translateX(8rem)"};

   display: flex;
   flex-direction: column;
`;

export const Videos = styled.div<ContainerProps>`
   display: grid;
   grid-template-columns: ${({openmenu}) => openmenu? "repeat(3, 1fr)" : "repeat(4, 1fr)"};
   gap: 2rem;
`;

export const Menu = styled.div`
   width: 8rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;
   padding: 0 .5rem;

   position: fixed;
   top: 6rem;
   bottom: 0;
`;