import React, { useState, Dispatch, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-configurable-grid';
import styled from 'styled-components';

import Button from '../../core/Button';
import Photo from '../../core/Photo';
import Pill from '../../core/Pill';

import { InitialState } from '../../../store/reducer';

type Params = { id: string };
type PhotoData = {
  src: string;
  title: string;
  views: number;
  downloads: number;
  likes: number;
};

const StyledDetailPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.PRIMARY_DARK};
  @media only screen and (min-width: 768px) {
    padding-bottom: 50px;
  }
`;

const StyledButtonsWrapper = styled.div`
  margin: 30px 0 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    &:first-of-type {
      margin-right: 25px;
    }
    &:last-of-type {
      margin-left: 25px;
    }
  }
`;

const StyledPillsWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin-bottom: 15px;
  }
  @media only screen and (min-width: 768px) {
    margin: 20px 0 30px;
    flex-direction: row;
    h3 {
      margin-bottom: 0;
      &:first-of-type {
        margin-right: 50px;
      }
      &:last-of-type {
        margin-left: 50px;
      }
    }
  }
`;

const DetailPage: React.FC = () => {
  const { id }: Params = useParams();
  const history = useHistory();
  const images = useSelector((state: InitialState) => state.images);

  const [photoData, setPhotoData]: [
    PhotoData | undefined,
    Dispatch<PhotoData>,
  ] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (images.length <= 1) {
      history.push('/');
    }

    const currentImg = images.find((image) => `${image.id}` === id);
    if (currentImg) {
      setPhotoData({
        src: currentImg.largeSrc,
        title: currentImg.title,
        views: currentImg.views,
        downloads: currentImg.downloads,
        likes: currentImg.likes,
      });
    }
  }, [history, id, images]);

  const handleClickArrowButton = useCallback(
    (isPrev = true) => {
      const currentIndex = images.findIndex((image) => `${image.id}` === id);
      const updatedIndex = isPrev
        ? currentIndex === 0
          ? images.length - 1
          : currentIndex - 1
        : currentIndex === images.length - 1
          ? 0
          : currentIndex + 1;
      const currentImageId = images[updatedIndex].id;
  
      history.push(`${currentImageId}`);
    },
    [history, id, images],
  );

  return (
    <StyledDetailPage>
      <Row>
        <Col xs={12}>
          <StyledButtonsWrapper>
            <Button onClick={handleClickArrowButton}>
              <i className="material-icons">arrow_back</i>
            </Button>
            <Button onClick={() => history.push('/')}>
              <i className="material-icons">close</i>
              <span>close</span>
            </Button>
            <Button onClick={() => handleClickArrowButton(false)}>
              <i className="material-icons">arrow_forward</i>
            </Button>
          </StyledButtonsWrapper>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StyledPillsWrapper>
            <Pill text={`${photoData?.views} views`} />
            <Pill text={`${photoData?.downloads} downloads`} />
            <Pill text={`${photoData?.likes} likes`} />
          </StyledPillsWrapper>
        </Col>
      </Row>
      <Row>
        <Col xs={0} sm={2} xl={3} />
        <Col xs={12} sm={8} xl={6}>
          <Photo src={photoData?.src} title={photoData?.title} />
        </Col>
        <Col xs={0} sm={2} xl={3} />
      </Row>
    </StyledDetailPage>
  );
};

export default DetailPage;
