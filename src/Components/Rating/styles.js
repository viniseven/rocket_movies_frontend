import styled from "styled-components";

export const Container = styled.div`
   
    margin-top: 8px;
    display: flex;
    gap: 6px;
  
    > svg {
        width: 2rem;
        height: 2rem;

        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;