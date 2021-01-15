import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: black;
  font-family: Roboto, sans-serif;
  font-size: 54px;
  text-align: center;
  margin-bottom: 200px;
`;

export const LoginButton = styled.a`
  display:flex;
  align-items:center;
  justify-content: center;
  background: black;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  transition-duration: 0.4s;

  &:hover{
    background: grey;
  }
`;