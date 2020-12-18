import styled from 'styled-components';

export const FeedBack = styled.div`
  display: grid;
  justify-content: center;
`;

export const BorderFeedBack = styled.div`
  border: solid 3px #ffc54d;
  border-radius: 20% 80% 32% 68% / 60% 18% 82% 40%;
  width: 800px;
  height: 200px;
`;

export const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 25px;
  padding: 30px;
`;
