import styled from 'styled-components';

export const Title = styled.span`
  margin: 0 0 0.5rem 0.5rem;
  font: 700 1.2rem Quicksand, sans-serif;
  color: ${props => props.theme.colors.themedText} !important;

  div + & {
    margin-top: 0.8rem;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 2rem;
  background-color: ${props => props.theme.colors.text};
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  padding: 0rem 0.5rem;

  &:focus-within {
    background-color: ${props => props.theme.colors.primary};
    box-shadow: inset 0 -28px 40px rgba(0, 0, 0, 0.3);

    input {
      color: ${props => props.theme.colors.text};
    }
  }

  input {
    background-color: transparent;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;

    font: 600 1.2rem Quicksand, sans-serif;
  }
`;
