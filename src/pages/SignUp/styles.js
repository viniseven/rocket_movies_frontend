import styled from "styled-components";

import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    align-items: stretch;
`;

export const Form = styled.div`
   padding: 16.3rem;

   display: flex;
   flex-direction: column;
   justify-content: center;

   > h1{
    color: ${({ theme }) => theme.COLORS.PINK};

    font-size: 4.8rem;
   }

   > p{ 
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 5.4rem;
   }

   > h2{
    margin-bottom: 4.2rem;
   }

   button {
        margin: 2.4rem 0 4.2rem;
   }
`;

export const Background = styled.div`
    flex: 1;

    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
`;