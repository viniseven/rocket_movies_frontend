import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    border: 0;
    border-radius: 10px;

    margin-top: 2.4rem;

    font-weight: 500;
    font-size: 1.8rem;

    transition: 0.7s;

    &:hover{
        background-color: ${({ theme }) => theme.COLORS.PINK_100};
    }
`;