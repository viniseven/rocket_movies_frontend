import styled from "styled-components";

export const Container = styled.div`
   
    margin-top: 8px;
    display: flex;
    gap: 6px;
  
    > svg {
        width: 1.4rem;
        height: 1.4rem;

        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;