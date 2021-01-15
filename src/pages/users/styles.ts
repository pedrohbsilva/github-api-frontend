import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`

`;

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #c3c3c3;
  padding: 16px;
  transition-duration: 0.4s;
  border-radius: 4px;
  margin-bottom: 4px;
  color: white;
  &:hover{
    background: grey;
  }
`;

export const ButtonPage = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 150px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #c3c3c3;
  color: black;
  padding: 16px;
  border-radius: 4px;
  transition-duration: 0.4s;
  color: white;
  &:hover{
    background: grey;
  }
`;






