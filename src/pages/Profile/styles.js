import styled from "styled-components";

export const Container = styled.div`

    width: 100%;

    header{
        width: 100%;
        height: 14.4rem;

       display: flex;
       align-items: center;

        padding: 0 14.4rem;

        background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};
    }
`;

export const Form = styled.form`
    max-width: 34rem;

    margin: 0 auto;

    div:nth-child(4){
       margin-top: 2.4rem;
    }

    button {
        margin-top: 2.4rem;
    }
`;

export const Avatar = styled.div`
   width: 100%;
   position: relative;
   margin: -10rem 0 6.4rem;

   text-align: center;

    img {
        width: 18rem;
        height: 18rem;
        
        border-radius: 50%;
    }

    label {
        padding: 1.4rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        justify-content: center;

        width: 4.8rem;
        height: 4.8rem;

        position: absolute;
        right: 8rem;
        bottom: 1rem;

        cursor: pointer;

        &:hover{
            background-color: ${({ theme }) => theme.COLORS.PINK_100};
        }
        
        svg {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
    }

    input {
        display: none;
    }
`;