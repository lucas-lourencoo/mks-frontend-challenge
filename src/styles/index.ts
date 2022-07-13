import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 12rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    margin: 4rem auto;
  }

  .cardsGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.4rem;
    width: 100%;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      width: 75%;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
