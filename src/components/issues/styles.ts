import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Issues = styled.div`
  margin-top: 50px;
  > a div {
    transition: 0.2s;
    &:hover {
      transform: translateX(10px);
    }
  }
  > a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    display: block;
    text-decoration: none;
    display: flex;
    padding-left: 24px;
    align-items: center;
    & + a {
      margin-top: 16px;
    }
    > div {
      flex: 1;
      margin: 0 16px;
      > strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      > p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    > svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const InfoButton = styled(Link)`
  display:flex;
  width: 50px;
  height: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: #fff;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  text-decoration: none;
  transition-duration: 0.4s;
  &:hover{
    background: grey;
  }
`;
