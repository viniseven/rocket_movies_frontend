import styled from "styled-components";

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
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        width: 12.5rem;
        
        line-height: 2.4rem;

        text-align: right;

        span:first-child{
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }

        button {
           text-align: right;
        }
    }
`;

