import styled from 'styled-components';

const Card = styled.div`
  background: var(--white-400);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.8rem 0;

    img {
      max-height: 13.9rem;
    }
  }

  .infos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.2rem;
    margin: 0 auto;

    .cardTitle {
      font-size: 1.8rem;
      font-weight: 400;
      color: var(--gray-500);
    }

    strong {
      background: var(--gray-400);
      color: var(--white-400);
      border-radius: 5px;
      font-size: 1.6rem;
      padding: 0.4rem;
      display: inline-block;
    }
  }

  p {
    padding: 1.2rem;
    font-size: 1.4rem;
    line-height: 1.2;
    font-weight: 300;
    color: var(--gray-500);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.4rem;
    color: var(--white-400);
    background: var(--blue);
    padding: 1.2rem 0.8rem;
    transition: all 0.2s;

    &:hover {
      filter: brightness(110%);
    }

    svg {
      margin-right: 0.8rem;
    }
  }
`;

export default Card;
