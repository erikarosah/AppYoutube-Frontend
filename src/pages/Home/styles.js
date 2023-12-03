import styled from "styled-components";

export const Content = styled.main` 
   width: 100%;
   display: flex;
`;

export const Videos = styled.div` 
   width: fit-content;
   margin-top: 8.5rem;
   padding: 0 2rem;

   transition: transform .4s;
   transform: ${({openmenu}) => openmenu? "translateX(25rem)" : "translateX(8rem)"};
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