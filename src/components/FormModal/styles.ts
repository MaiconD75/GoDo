import styled from 'styled-components';

interface ModalProps {
  isOpened: boolean;
}

export const Modal = styled.div<ModalProps>`
  background-color: rgba(20, 20, 20, 0.4);
  width: 100vw;
  height: 100vh;

  z-index: 2;

  position: absolute;
  display: ${props => (props.isOpened ? 'flex' : 'none')};

  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  width: 50vw;
  height: 40vh;
  border-radius: 2rem;
  padding: 2rem;

  @media (min-width: 1200px) {
    width: 32vw;
  }

  @media (max-width: 1000px) {
    width: 90vw;
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    padding: 1rem;

    > span {
      margin: 0.4rem 0;
      color: #eb3535;
    }

    > div:last-child {
      margin-top: 2rem;
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    button {
      background-color: ${props => props.theme.colors.secundary};
      border: none;
      width: 45%;
      height: 3rem;
      border-radius: 1.5rem;

      font: 600 1.4rem Quicksand, sans-serif;
      color: ${props => props.theme.colors.text};
      cursor: pointer;

      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4),
        inset 0 -28px 40px rgba(0, 0, 0, 0.3);
    }

    button:nth-child(1) {
      background-color: #b85555;
    }
  }
`;
