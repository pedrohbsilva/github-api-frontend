import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { FiArrowRightCircle, FiArrowLeftCircle, FiLogOut } from 'react-icons/fi';
import CircularProgress from '@material-ui/core/CircularProgress';

import { 
  Container,
  ButtonPage,
  LogoutButton
 } from './styles';
import { useAuth } from '../../hooks/auth';
import IssuesComponent from '../../components/issues';
import { Issues } from '../../components/issues/styles';

interface ParamsProps{
  page: string;
}

interface UserProps{
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

const Users: React.FC = () => {
  const params = useParams<ParamsProps>();
  const page = params.page ? params.page : 1;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const {signOut} = useAuth();

  useEffect(() => { 
    const load = async() => {
      setLoading(true);
      const since = ((Number(page) ? Number(page) : 1) - 1) * 30;
      const response = await api.get(`api/users?since=${since}`);
      setUsers(response.data.message);
      setLoading(false)
    } 
    load();
  }, [page]); 

  if(loading){
    return (
      <div style={{display: `flex`, justifyContent: 'center', alignItems: "center"}}>
        <CircularProgress color="primary" size={40}/>
      </div>
    )
  }
    return (
        <Container>
          <header>
            <LogoutButton type="button" onClick={() => signOut()}>
              <FiLogOut size={24} style={{marginRight: 14}}/>
              Logout
            </LogoutButton>
          </header>
          <Issues>
          {users.map((user: UserProps)=>(
            <IssuesComponent 
              key={user.id}
              url={user.html_url}
              infoStrong={`name: ${user.login}`}
              infoP={`id: ${user.id}`}
              link={`/details/${user.login}`}
            />
          ))}
          </Issues>
          
          <div style={{width: '100%', marginTop: 8,display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          { Number(page) > 1 &&     
            <ButtonPage to={`/users/${(Number(page) - 1)}`} >
              <FiArrowLeftCircle size={24} style={{marginRight: 6}}/>
              Previous
            </ButtonPage> 
          }
          <ButtonPage to={`/users/${(Number(page) + 1)}`} >
            Next
            <FiArrowRightCircle size={24} style={{marginLeft: 6}}/>
          </ButtonPage>
          </div>
        </Container>
    )
}

export default Users