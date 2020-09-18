import React, { useState, useRef, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Loader, { LoaderType } from '../../core/Loader';

import { InitialState } from '../../../store/reducer'; 


type Params = { id: string };

const StyledDetailPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.palette.PRIMARY_DARK};
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    padding: 0 30px;
  }
`;

const DetailPage: React.FC = () => {
  const { id }:Params = useParams();
  const history = useHistory();
  const images = useSelector((state: InitialState) => state.images);

  const [isLoading, setIsLoading] = useState(true);
  const imgSrc = useRef('');

  useEffect(() => {
    if(images.length <= 1){
      history.push('/');
    }
    
    setIsLoading(true);

    const currentSrc = images.find(image => `${image.id}` === id)?.largeSrc;
    if(currentSrc){
      imgSrc.current = currentSrc;
      setIsLoading(false);
    }
  }, [history, id, images]);

  return (
    <StyledDetailPage>
       {isLoading ? <Loader type={LoaderType.LIGHT}/> : <img src={imgSrc.current} alt="dasdf" />}
    </StyledDetailPage>
  )
};

export default DetailPage;