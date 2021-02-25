import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 50px rgba(0, 0, 0 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const BoxNoActiveChallenge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 50%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  }
`;

export const BoxActiveChallenge = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const Button = styled.button<{styleType: string}>`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: var(--green);

  color: var(--white);

  font-size: 1 rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9)
  }

  ${({ styleType }) => {
    if (styleType === 'failed') {
      return css`
        background: var(--red);
      `;
    }
  }}
`;
