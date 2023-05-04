import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    padding: 0.5rem 1.6rem;

    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 8px;

`;