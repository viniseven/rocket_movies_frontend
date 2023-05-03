import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    margin-bottom: 0.8rem;
    border-radius: 10px;

    > input {
        width: 100%;
        height: 5.6rem;

        padding: 1.2rem;

        border: 0;
        
        background: transparent;

        color: ${({ theme }) => theme.COLORS.WHITE};

        font-size: 1.6rem;
    }
`;
