import styled from 'styled-components';

const Container = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Title = () => {
  return (
    <Container>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </Container>
  );
};

export default Title;
