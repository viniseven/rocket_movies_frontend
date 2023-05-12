import styled from "styled-components";

export const Container = styled.div`
     display: grid;
     grid-template-rows: 1fr;
     grid-template-areas: 
     "header"
     "content";
     gap: 4.0rem;

    > main {
        grid-area: content;

        margin: 0 12rem;

        header {
            display: flex;
            align-items: center;
            gap: 1.9rem;

            margin: 2.4rem 0;
        }
    }

    .data-user {
        display: flex;
        align-items: center;
        gap: 8px;

        img {
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 3.5rem;
            }

        span {
            font-family: 'Roboto', sans-serif;
            }

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            }   
    }
`;