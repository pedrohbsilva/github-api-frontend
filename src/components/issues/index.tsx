import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { InfoButton } from './styles';

interface IssuesProps{
  url: string;
  infoStrong: string;
  infoP: string;
  link: string;
}
const IssuesComponent: React.FC<IssuesProps> = ({url, infoP, infoStrong,link, children}) => {
  return(
    <>
      <a href={url}>
        <div>
          <strong>{infoStrong}</strong>
          <p>{infoP}</p>
        </div>
        {
          link !== `` ?
          <InfoButton to={link}>
            <FiChevronRight size={20}/>
          </InfoButton>
          :
          ''
        }
      </a>
    </>
  );
}

export default IssuesComponent;