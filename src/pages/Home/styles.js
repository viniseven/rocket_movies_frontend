import styled from "styled-components";

export const Container = styled.div`
    max-width: 1360px;
    
    margin: 0 auto;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-areas: 
    "header"
    "content";
`;

export const Content = styled.div`

    grid-area: content;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    padding: 5rem 12rem;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            width: 20.7rem;
        }
    }

    .content-data {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        overflow-y: auto;
        overflow-x: hidden;

    }

    .content-tags {
        display: flex;
        gap: 8px;

        margin-top: 1.5rem;
    }
`;