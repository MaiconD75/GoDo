import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  transition: 0.2s;

  @media (min-width: 1200px) {
    width: 50vw;
    height: 90vh;
    align-self: center;
    justify-self: center;
    border-radius: 2.25rem;

    box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);
  }
`;

export const ThemeButton = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;

  position: absolute;
  top: 1rem;
  right: 11rem;
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.4);

  @media (max-width: 1000px) {
    top: 3rem;
    left: 1.5rem;
  }

  input {
    appearance: none;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    position: absolute;
    z-index: 1;

    cursor: pointer;
  }

  input:checked ~ div {
    transform: rotate(180deg);
  }

  > div {
    width: 8rem;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -2rem;

    > div {
      width: 8rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${props => props.theme.colors.text};
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }
`;

export const LigthContainer = styled.div`
  background-color: ${props => props.theme.colors.ligthThemeColor};
`;

export const DarkContainer = styled.div`
  background-color: ${props => props.theme.colors.darkThemeColor};
`;

export const AddButton = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: ${props => props.theme.colors.secundary};

  font: 400 9rem Quicksand, sans-serif;
  color: ${props => props.theme.colors.text};

  position: absolute;
  top: 1rem;
  right: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 40px rgba(0, 0, 0, 0.4), inset 0 -28px 40px rgba(0, 0, 0, 0.3);

  border: none;
  cursor: pointer;

  span {
    line-height: 9rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.themedText};

  h1 {
    font-size: 18rem;
    margin-right: 2rem;
  }

  h3 {
    font-size: 4.5rem;
    width: 26rem;
  }

  @media (max-width: 1000px) {
    margin-top: 8rem;
    padding: 0 auto;

    h1 {
      font-size: 9rem;
      margin-right: 2rem;
    }

    h3 {
      font-size: 2.5rem;
      width: 14rem;
    }
  }
`;

export const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  overflow-y: auto;
  padding: 2rem 0;
  margin-bottom: 2rem;

  position: relative;

  li {
    list-style: none;

    width: 90%;
    min-height: 6.25rem;
    height: 6.25rem;

    display: flex;
    flex: center;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};
    border-radius: 3.12rem;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3),
      inset 0 -28px 40px rgba(0, 0, 0, 0.3);

    input {
      width: 2.6rem;
      height: 2.6rem;
      background-color: ${props => props.theme.colors.background};
      position: relative;

      border-radius: 1rem;
      margin: 0 1.5rem;

      appearance: none;

      cursor: pointer;

      box-shadow: 0 0 12px ${props => props.theme.colors.background}66,
        inset 0 0 40px rgba(0, 0, 0, 0.4);

      transition: 0.2s;

      &:after {
        content: '';
        width: 0;
        height: 0;
        background: ${props => props.theme.colors.secundary};
        position: absolute;
        bottom: calc(0.1rem + 1.2rem);
        left: 0.4rem;
        border-radius: 0.2rem;
        transform: rotate(-45deg);
        transition: 0.2s;
      }

      &:before {
        content: '';
        width: 0;
        height: 0;
        background: ${props => props.theme.colors.secundary};
        position: absolute;
        bottom: 1.2rem;
        left: calc(0.4rem + 1.2rem);
        border-radius: 0.2rem;
        transform: rotate(-45deg);
        transition: 0.2s;
      }
    }

    input:checked {
      background: transparent;
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.4), inset 0 0 12px rgba(0, 0, 0, 0.5);

      &:after {
        height: 1.4rem;
        width: 0.4rem;
        bottom: 0.1rem;
        transform: rotate(-45deg);
      }

      &:before {
        width: 3rem;
        height: 0.4rem;
        left: 0.4rem;
        border-radius: 0.2rem;
        transform: rotate(-45deg);
      }
    }

    p {
      font-weight: 500;
      font-size: 2.25rem;
    }

    span {
      font-size: 1.5rem;
    }
    @media (max-width: 1000px) {
      p {
        font-weight: 500;
        font-size: 1.5rem;
      }

      span {
        font-size: 1.2rem;
      }
    }
  }

  li + li {
    margin-top: 2rem;
  }
`;
