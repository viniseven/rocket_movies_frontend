import styled from "styled-components";

export const Container = styled.div`
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

export const Profile = styled.div`
    
    display: flex;
    align-items: center;
    gap: 15px;

    > img {
        width: 7rem;
        height: 7rem;

        border-radius: 50%;
    }

    > div {
        width: 12.5rem;
        line-height: 2.4rem;
    }
`;

