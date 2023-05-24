import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
    grid-area: header;
  
    width: 100%;

    display: flex;

    align-items: center;
    justify-content: space-around;
    gap: 6.4rem;

    padding: 3.0rem 12.3rem;

    border-bottom: 1px solid #3E3B47;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.4rem;
    }
`;

export const Profile = styled(Link)`

    width: max-content;

    display: flex;
    align-items: center;
    gap: 9px;

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        
        width: max-content;
    }
    
        span {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > img {
            width: 7rem;
            height: 7rem;

            border-radius: 50%;
    }

`;

