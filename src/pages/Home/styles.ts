import styled from "styled-components";

interface ContainerProps {
   openmenu?: boolean,
};

interface ContainerPropsButtons {
   btnleftctive?: boolean,
   btnrightactive?: boolean
};

export const Content = styled.main` 
   width: 100%;
   height: auto;
   display: flex;
   overflow: hidden;
   padding-bottom: 2rem;
`;

export const Filter = styled.div` 
   width: 85vw;
   display: flex;
   align-items: center;
   overflow-x: scroll;
   scroll-behavior: smooth;
   padding: .5rem 1rem 2rem 1rem;
   gap: 2rem;
   
   > span {
      min-width: max-content;
      padding: .8rem;
      font-weight: bold;

      border-radius: .5rem;
      cursor: pointer;
      background-color: ${({theme}) => theme.COLORS.WHITE_200};
   }

   &::-webkit-scrollbar {
      display: none;
   }

   @media(max-width: 600px){
     display: none;
   } 
`;

export const Controls = styled.div<ContainerProps>`
   width: 87vw;
   display: flex;
   justify-content: space-between;
   
   > button {
      padding: 1rem;

      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      background-color: #fff;

      &:hover {
         background-color:  ${({theme}) => theme.COLORS.WHITE_200};
      }
   }
`;

export const BtnLeft = styled.button<ContainerPropsButtons>`
   position: absolute;
   top: 0;
   left: 0;

   visibility: ${({btnleftctive}) => btnleftctive? "visible"  : "hidden"};
   
`;

export const BtnRight = styled.button<ContainerPropsButtons>`
   position: absolute;
   top: 0;
   right: 10px;

   visibility: ${({btnrightactive}) => btnrightactive? "visible"  : "hidden"};
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

   @media(max-width: 1024px){
      width: 100vw;
      padding: 0;
      align-items: center;
      transform: ${({openmenu}) => openmenu? "translateX(0)" : "translateX(0)"};
   } 
`;

export const Videos = styled.div<ContainerProps>`
   width: ${({openmenu}) => openmenu? "90%" : "100%"}; 
   display: grid;
   grid-template-columns: ${({openmenu}) => openmenu? "repeat(3, 1fr)" : "repeat(4, 1fr)"};
   gap: 2rem;

   @media(max-width: 1024px){
      width: 80vw;
      display: grid;
      grid-template-columns: ${({openmenu}) => openmenu? "repeat(3, 1fr)" : "repeat(3, 1fr)"};
      gap: 0;
      padding: 0 1rem;
   } 

   
   @media(max-width: 834px){
      width: 100%;
   } 

   @media(max-width: 800px){
      padding: 0 .5rem;
   } 

   @media(max-width: 768px){
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     gap: 0 2rem;
   } 


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

   @media(max-width: 1024px){
      display: none;
   }
`;

export const Shorts = styled.div<ContainerProps>`
   display: flex;
   flex-direction: column;
   gap: 2rem;

   > div {
      width: ${({openmenu}) => openmenu? "90%" : "100%"}; 
      display: grid;
      grid-template-columns: ${({openmenu}) => openmenu? "repeat(5, 1fr)" : "repeat(6, 1fr)"};
   }

   @media(max-width: 1024px){
      > h2{
         padding-left: 5rem;
      }

      > div {
         display: flex;
         flex-wrap: wrap;
         justify-content: center;

         gap: 1rem;

         > div{
            margin-bottom: 2rem;
         }
      }
   }  
`;