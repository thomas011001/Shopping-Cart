import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  transition: 300ms;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: ${({ theme }) => theme.colors.textWhite};
  font-weight: 800;
  font-size: medium;

  a {
    color: ${({ theme }) => theme.colors.textWhite};
    text-decoration: none;
    font-weight: 800;
    font-size: medium;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryVariant};
    opacity: 0.9;
  }
`;

export default Button;
