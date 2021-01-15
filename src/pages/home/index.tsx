import React from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import {useAuth} from '../../hooks/auth';
import { Container, LoginButton, Title} from './styles';
import { CircularProgress } from '@material-ui/core';
import {FiLogIn} from 'react-icons/fi'
const Home: React.FC = () => {
  const history = useHistory();
  const parsed = queryString.parse(window.location.search);
  const clientId = 'c0f09952542c50653d07';
  const {signIn} = useAuth();

  if(parsed.code){
    signIn(parsed);
    history.push('/users');
    return (
      <Container>
          <CircularProgress color="primary" size={40}/>
      </Container>
    )
  } else {  
    return (
      <Container>
        <Title>Github Consult API APP</Title>
        <LoginButton href={`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user`}>
          <FiLogIn size={24} style={{marginRight: 8}}/>
          Login with GitHub
        </LoginButton>
      </Container>
    )
  }
}



export default Home;
