import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 0.8rem;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 0.8rem;

  background: var(--white-400);
  color: var(--gray-500);
  margin-bottom: 1.6rem;

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.6rem;
  }

  .down {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 0.8rem;

    @media (max-width: 760px) {
      align-items: center;
      gap: 1.6rem;
      width: 100%;
    }
  }

  span {
    font-size: 1.5rem;
    line-height: 1.3;

    @media (max-width: 760px) {
      text-align: center;
      width: 100%;
      font-size: 2rem;
    }
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    img {
      max-height: 8rem;

      @media (max-width: 760px) {
        max-height: 12rem;
      }
    }
  }

  .removeItemButton {
    display: flex;
    position: absolute;
    right: -10px;
    top: -10px;
    align-items: center;
    justify-content: center;
    background: var(--black);
    color: var(--white-400);
    padding: 0.4rem 0.8rem;
    font-size: 1.4rem;
    border-radius: 50%;

    transition: all 0.3s;

    @media (max-width: 760px) {
      right: 10px;
      top: 0;
      background: none;
      color: var(--black);
      font-size: 3.2rem;
    }

    &:hover {
      filter: brightness(120%);
    }
  }

  .incrementor {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid var(--gray-200);
    border-radius: 8px;
    margin-top: 0.4rem;

    button,
    span {
      font-size: 2rem;
      padding: 0.4rem 0;
      text-align: center;
    }

    button:last-child {
      border-right: none;
      border-left: 1px solid var(--gray-200);
    }

    button {
      border-right: 1px solid var(--gray-200);
    }
  }

  .itemValue {
    font-weight: 700;
    text-align: center;
    font-size: 1.8rem;
    color: var(--black);

    @media (max-width: 760px) {
      background: var(--gray-400);
      color: var(--white-400);
      border-radius: 5px;
      font-size: 1.8rem;
      padding: 0.4rem;
      display: inline-block;
    }
  }
`;

export default Container;
