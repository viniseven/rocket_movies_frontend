import styled from "styled-components";

export const Container = styled.div`
    max-width: 1360px;
    
    margin: 0 auto;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-areas: 
    "header"
    "content";
    gap: 4.0rem;

    > main {
        grid-area: content;

        margin: 0 12rem;
    }
`;


export const Form = styled.form`

    width: 100%;

    > h1 {
        margin-top: 2.4rem;
    }

    > div {
        display: flex;
        gap: 4rem;

        margin-top: 4rem;
    }

    .group-market{
        display: flex;
        gap: 2.4rem;

        background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    }

    .button-footer button:first-child{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;
