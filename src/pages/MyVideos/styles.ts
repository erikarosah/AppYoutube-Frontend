import styled from "styled-components";

interface ContainerProps {
   openmenu?: boolean,
};

export const Content = styled.main` 
   width: 100%;
   display: flex;
   overflow: hidden;
   padding-bottom: 2rem;
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

   > div:first-child{
      display: flex;
      gap: 2rem;
      padding: 0 0 1rem 0;
      border-bottom: .1rem solid ${({theme}) => theme.COLORS.GRAY};

      > button {
         width: 14rem;
         height: 14rem;
         background-color: ${({theme}) => theme.COLORS.GRAY};
         font-size: 8rem;
      }

      > div {
         
         >h2 {
            font-size: 3rem;
         }

         > h3 {
            color: ${({theme}) => theme.COLORS.GRAY_100};
         }
      }

      > form {
         display: flex;
         align-items: center;

         height: fit-content;
         gap: .5rem;
         padding: .5rem;
         border-radius: .5rem;
         border: .1rem solid ${({theme}) => theme.COLORS.GRAY};
         
         > svg {
            font-size: 1.2rem;
         }
         > input {
            border: none;
            outline: none;
         }
      }
   }
`;

export const Videos = styled.div<ContainerProps>`
   > div button {
      margin-bottom: 1rem;
      
      > svg {
         font-size: 1.5rem;
      }
   }
  
   margin-top: 5rem;
   width: ${({openmenu}) => openmenu? "90%" : "100%"}; 
   display: grid;
   grid-template-columns: ${({openmenu}) => openmenu? "repeat(3, 1fr)" : "repeat(4, 1fr)"};
   gap: 2rem;

   > button {
      width: 1rem;
      height: 1rem;
   }

   > h2 a {
      color: ${({theme}) => theme.COLORS.BLUE_100};
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
`;