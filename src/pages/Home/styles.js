import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 4rem;

    margin: 5rem 12rem 0;

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
    }

    .content-tags {
        display: flex;
        gap: 8px;

        margin-top: 1.5rem;
    }
`;