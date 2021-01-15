import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import api from '../../services/api';
import { Container } from '../home/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import IssuesComponent from '../../components/issues';

interface ParamsProps{
  username: string;
}

interface UserProps{
  avatar_url: string;
  created_at: Date;
  html_url: string;
  id: number;
  login: string;
}
interface RepositoryProps{
  id:number;
  name: string;
  html_url: string;
}

const Details: React.FC = () => {
  const { username } = useParams<ParamsProps>();
  const [ user, setUser ] = useState<UserProps>();
  const [ repositories, setRepositories ] = useState([]);
  const [ loading, setLoading] = useState(false);

  useEffect(()=>{
    const load = async () =>{
      setLoading(true);
      const responseDetails = await api.get(`/api/users/${username}/details`);
      setUser(responseDetails.data.message);
      const responseRepos = await api.get(`/api/users/${username}/repos`);
      setRepositories(responseRepos.data.message);
      setLoading(false);
    }
    load();
  },[username])

  if(loading){
    return(
      <Container>
          <CircularProgress color="primary" size={40}/>
      </Container>
    )
  }

  return (
      <>
        <Header>
          <Link to="/users">
            <FiChevronLeft size={16} />
            Voltar
          </Link>
        </Header>
        {user && (
        <RepositoryInfo>
          <header>
            <img
              src={user.avatar_url}
              alt={user.login}
            />
            <div>
              <strong>Login: {user.login}</strong>
              <p>id: {user.id}</p>
              <strong> </strong>
              <p>Date of the login creation: {new Intl.DateTimeFormat('pt-BR').format(new Date(user.created_at))}</p>
            </div>
          </header>
        </RepositoryInfo>
      )}

      <Issues>
        {repositories && repositories.map((issue:  RepositoryProps) => (
          <IssuesComponent 
            key={issue.id}
            url={issue.html_url}
            infoStrong={`name: ${issue.name}`}
            infoP={`id: ${issue.id}`}
            link=""
          />
        ))}
      </Issues>
  
      </>
  );
}

export default Details;
