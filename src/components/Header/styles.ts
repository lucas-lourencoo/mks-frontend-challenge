import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  padding: 1.6rem 0;
  color: var(--white-400);
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 10;

  .headerCenter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    width: 100%;

    @media (max-width: 1024px) {
      width: 90%;
    }

    .logo {
      font-size: 2.4rem;
      font-weight: 500;

      span {
        font-size: 1.8rem;
        font-weight: 300;
        margin-left: 0.8rem;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 8px;
      background: var(--white-400);
      padding: 1rem 1.8rem;
      font-size: 1.8rem;
      font-weight: 700;
      transition: 0.3s;

      &:hover {
        filter: brightness(90%);
      }

      svg {
        margin-right: 1.6rem;
      }
    }
  }
`;
