import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 45rem;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem;
    gap: 2rem;

    border: .1rem solid ${({theme}) => theme.COLORS.GRAY};
    border-radius: .8rem;

    text-align: center;
    
    
    > div img {
        width: 10rem;
        height: 5rem;
    }

    > div  span{
        display: block;
        font-size: 1.8rem;
        padding: 1rem 0;
    }
    > div h3 {
        font-weight: normal;
    }
`;

export const Inputs = styled.div`
    > form{
        
        width: 100%;
    
        display: flex;
        flex-direction: column;
        align-items: center;
    
        gap: 2rem;
    
        > input {
            width: 35rem;
            height: 5rem;
    
            display: block;
    
            border: .1rem solid ${({theme}) => theme.COLORS.GRAY};
            outline: none;
            padding: 0 1rem;
            border-radius: .5rem;
    
            &:focus{
                border: .2rem solid ${({theme}) => theme.COLORS.BLUE_100};
            }
        }
    }
`;

export const Buttons = styled.div`
        width: 90%;
        display: flex;
        justify-content: space-between;

        > button{
            width: 9rem;
            height: 4rem;
            color: ${({theme}) => theme.COLORS.WHITE_100};
            background-color: #287ae6;

            border-radius: .5rem;

            font-weight: 400;

            &:hover {
            background-color: ${({theme}) => theme.COLORS.BLUE_200};
        }
        }

        > button:first-child{
            background-color: transparent;
            color: ${({theme}) => theme.COLORS.BLUE_100};
        }
`;