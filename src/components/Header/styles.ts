import styled from "styled-components";

interface ContainerProps {
    openmenumodal: boolean;
}

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

    > a img {
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
    flex-direction: column;
    align-items: center;

    >div:first-child{
        display: flex;
        align-items: center;
        gap: 1rem;

        > a {
            color: #287ae6;
            padding: .8rem;
            font-weight: bold;
            font-size: 1.2rem;
            border-radius: .8rem;
            border: .1rem solid ${({theme}) => theme.COLORS.GRAY};

            &:hover {
                background-color: ${({theme}) => theme.COLORS.BLUE};
            }
        }
    }
`;

export const Modal = styled.div<ContainerProps>`
    position: absolute;
    top: 5rem;
    right: 2rem;
    bottom: 0;

    padding: 1.5rem;
    min-width: fit-content;
    min-height:  fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.WHITE_100};
    border-radius: .5rem;
    box-shadow: 1px 1px 5px 1px ${({theme}) => theme.COLORS.GRAY};

    > div:first-child{
        display: flex;
        gap: 1rem;
    }

    > div div h2, h3, a{
        color: ${({theme}) => theme.COLORS.GRAY_200};
        text-align: center;
        margin-bottom: 1px;
    }

    > div button {
        background-color:  ${({theme}) => theme.COLORS.GRAY};
    }

    display: ${({openmenumodal}) => openmenumodal? "block" : "none"};
`;

export const ModalContent = styled.div`
    margin-top: 2rem;

    > span {
        display: flex;

        padding: 1rem;
        gap: 1rem;
        border-radius: .8rem;
        font-size: 1.4rem;
        margin-bottom: .5rem;
        cursor: pointer;

        transition: background-color .4s;

        &:hover{
            background-color: ${({theme}) => theme.COLORS.GRAY};
        }

        > svg {
            font-size: 1.7rem;
        }
    }
`;