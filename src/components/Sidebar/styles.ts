import styled from 'styled-components';

interface IContainer {
  isSidebarOpen: boolean;
}

export const Container = styled.aside<IContainer>`
  @keyframes appear {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  background: var(--blue);
  height: 100vh;
  width: 40%;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  color: var(--white-400);
  padding: 1.6rem 2.4rem;

  z-index: 10;
  position: fixed;
  right: 0;
  top: 0;

  display: ${(props) => (props.isSidebarOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  animation: appear 0.7s forwards;

  @media (max-width: 760px) {
    width: 90%;
  }

  .cartItems {
    max-height: 60%;
    width: 100%;

    @media (max-width: 760px) {
      overflow: auto;
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
    width: 100%;

    h2 {
      font-size: 2.8rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--black);
      color: inherit;
      padding: 0.8rem 1.2rem;
      font-size: 1.8rem;
      border-radius: 50%;

      transition: all 0.3s;

      &:hover {
        filter: brightness(120%);
      }
    }
  }

  footer {
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 2.6rem;
    font-weight: 700;
    z-index: 10;

    .total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 90%;
      margin: 0 auto 1.6rem;
    }

    button {
      text-align: center;
      width: 100%;
      color: var(--white-400);
      background: var(--black);
      padding: 2.4rem 0;
      font-size: inherit;
      font-weight: inherit;
    }
  }
`;
