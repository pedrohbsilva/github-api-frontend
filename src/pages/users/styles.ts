import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
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

export const ContainerCard = styled.div`
  display:flex;
  width: 70%;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: #e3e3e3;
  margin-bottom: 8px;
  border-radius: 16px;
  padding-left: 10px;
  padding-right: -10px;
`;

export const ImgCard = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 0px;

`

export const InfoText = styled.h3`
  color: black;
  font-family: Roboto, sans-serif;
  font-size: 24px;
`;

export const InfoButton = styled(Link)`
  display:flex;
  width: 5%;
  height: 90px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: #c3c3c3;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  text-decoration: none;
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






