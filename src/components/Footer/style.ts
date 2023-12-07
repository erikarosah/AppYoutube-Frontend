import { styled } from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 5rem;

    > div h2{
        font-size: 1.2rem;
    }

    > div:last-child {
        display: flex;
        justify-content: center;
        gap: 1rem;

        > a img{
            width: 2rem;
        }
    }
`;