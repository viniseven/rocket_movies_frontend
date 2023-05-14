import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 63rem;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  
    margin-bottom: 0.8rem;
    border-radius: 10px;

    > input {
        width: fit-content;
        height: 5.6rem;

        padding-left: 2rem;

        border: none;

        outline: none;
        
        background: transparent;

        color: ${({ theme }) => theme.COLORS.WHITE};

        font-size: 1.6rem;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }   
    }

    > svg {
        margin-left: 2rem;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;
