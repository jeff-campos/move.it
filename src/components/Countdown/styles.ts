import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const PanelCountdown = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px regba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid #f0f1f3;
      }
      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const Button = styled.button<{ status: boolean; preview: boolean }>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: ${({ preview }) => (preview ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px;
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  background: var(--red);
  
  &:not(:disabled):hover {
    background: var(--red-dark);
  }

  transition: background-color 0.2s linear;

  outline: none;

  ${({ status }) => {
    if (!status) {
      return css`
        background: var(--blue);
        &:not(:disabled):hover {
          background: var(--blue-dark);
        }
      `;
    }
  }}

  
  &:disabled {
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
  }
`;
