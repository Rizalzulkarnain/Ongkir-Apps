import styled from 'styled-components';

export const NotFoundDiv = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat';
  color: rgb(56, 56, 56);

  img {
    width: 50%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    margin-top: 20px;
  }

  .message {
    font-size: 1.5rem;
    text-align: center;
  }

  .btn {
    background: rgb(0, 195, 154);
    padding: 5px;
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;

    &:hover {
      background: rgb(0, 231, 201);
    }
  }
`;
