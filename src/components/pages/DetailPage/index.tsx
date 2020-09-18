import React, { useState, Dispatch, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-configurable-grid';
import styled from 'styled-components';

import Button from '../../core/Button';
import Photo from '../../core/Photo';

import { InitialState } from '../../../store/reducer';

type Params = { id: string };
type PhotoData = {
  src: string;
  title: string;
};

const StyledDetailPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.PRIMARY_DARK};
`;

const StyledCloseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
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
      });
    }
  }, [history, id, images]);

  return (
    <StyledDetailPage>
      <Row>
        <Col xs={12}>
          <StyledCloseButtonWrapper>
            <Button> 
              <i className="material-icons">close</i>
              close
            </Button>
          </StyledCloseButtonWrapper>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={4} xl={2}>
        </Col>
        <Col xs={12} sm={4} xl={8}>
          <Photo src={photoData?.src} title={photoData?.title} />
        </Col>
        <Col xs={12} sm={4} xl={2}>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
        </Col>
      </Row>
    </StyledDetailPage>
  );
};

export default DetailPage;
