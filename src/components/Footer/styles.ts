import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--white-600);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  padding: 0.8rem 0;

  @media (max-width: 576px) {
    font-size: 1.4rem;
    padding: 1.6rem 0;
  }
`;
