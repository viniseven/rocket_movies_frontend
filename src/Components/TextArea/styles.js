import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    min-height: 27rem;

    margin-top: 4rem;

    padding: 1.9rem 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border-radius: 10px;
    border: none;

    resize: none;

    font-size: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_200};
}   
`;