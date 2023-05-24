import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-weight: 400;
    }

    div {
        border-radius: 8px;

        padding: 1.6rem;
    }
`;