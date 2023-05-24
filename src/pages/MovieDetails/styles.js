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

        header {
            display: flex;
            align-items: center;
            gap: 1.9rem;

            margin: 0 auto;

            Button {
               width: 20.7rem;
               margin-left: auto;
            }
        }

        p {
            text-align: justify;
            margin-top: 4.0rem;
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

    .data-market {
        display: flex;
        gap: 8px;

        margin-top: 4.8rem;
    }
`;