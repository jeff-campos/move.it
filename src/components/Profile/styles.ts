import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

`;
export const Details = styled.div`
  margin-left: 1.5rem;

  strong, p {
    color: var(--title);
  }

  strong {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    margin-top: 0.5rem;

    img {
      margin-right: 0.5rem;
    }
  }


`;
