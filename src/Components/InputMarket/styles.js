import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: auto;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : 'none'};

    > input {
       background: transparent;
       border: none;
       
       font-size: 1.6rem;
       color: ${({ theme }) => theme.COLORS.WHITE};

       pointer-events: ${({ isNew }) => isNew ? "auto" : "none"};
    }

    > button {
        border: none;
        background: none;

        svg {
            width: 2.4rem;
            height: 2.4rem;
            
            color: ${({ theme }) => theme.COLORS.PINK};            
        }
    }
   

`;