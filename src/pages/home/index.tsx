import React from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import {useAuth} from '../../hooks/auth';
import { Container, LoginButton, Title} from './styles';
import { CircularProgress } from '@material-ui/core';

const Home: React.FC = () => {
  const history = useHistory();
  const parsed = queryString.parse(window.location.search);
  const clientId = process.env.REACT_APP_CUSTOM_ENV_VAR;
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
          Login with GitHub
        </LoginButton>
      </Container>
    )
  }
}



export default Home;
