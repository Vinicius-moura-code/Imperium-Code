import styled from 'styled-components';

export const MiddleBlock = styled.section`
  position: relative;
  padding: 15rem 0 10rem;
  text-align: center;
  font-size: 4rem;
  display: flex;
  flex-direction: column;
  
  justify-content: center;

  @media only screen and (max-width: 768px) {
    margin: 1.5rem 0 2rem 0;
  }
`;

export const Content = styled.p`
  padding: 3rem 0 3rem;
`;

export const ContentWrapper = styled.div`
position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;
