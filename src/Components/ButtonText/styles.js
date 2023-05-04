import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    border: 0;
    
    font-size: 1.6rem; 
    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;