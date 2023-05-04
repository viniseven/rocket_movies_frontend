import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};

    border-radius: 16px;

    padding: 3.2rem;

    transition: 1s;

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.2rem;
    }

    > p {
        margin-top: 1.5rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &:hover {
        cursor: pointer;
        scale: 1.1;
        
    }
`;