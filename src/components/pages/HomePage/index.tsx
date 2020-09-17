import React, { useEffect, useState, Dispatch } from 'react';
import { Row, Col } from 'react-configurable-grid';
import styled from 'styled-components';

import Layout from '../../layout';

import Thumb from '../../core/Thumb';

import { getImages } from '../../../services';

import { ThumbData, ImageExtendedData } from '../../../helpers/types';
import { DEFAULT_THUMBS } from '../../../helpers/constants';

const StyledThumbsWrapper = styled.div`
  margin: 40px 0;
  padding: 0 25px;
`;

const StyledCol = styled(Col)`
  position: relative;
  margin-bottom: 30px;
`;

const getFirstTag = (text: string) => text.substring(0,text.indexOf(','));

const getFormattedImages = (image: ImageExtendedData) => ({
  id: image.id,
  src: image.webformatURL,
  title: getFirstTag(image.tags),
});

const handleDownloadedImages = (images: ImageExtendedData[]) => (
  formattedFuntion: any,
) => images.map((image: ImageExtendedData) => formattedFuntion(image));

const handleGetImages = async () => {
  const { data, status } = await getImages();

  if (status === 200) {
    const { hits, totalHits } = data;
    const images = handleDownloadedImages(hits);

    return {
      images: images(getFormattedImages),
      total: totalHits,
    };
  }

  return {
    images: undefined,
    total: 0,
  };
}

const HomePage: React.FC = () => {
  const [thumbs, setThumbs]: [
    ThumbData[],
    Dispatch<ThumbData[]>,
  ] = useState(DEFAULT_THUMBS);

  const onGetImages = async () => {
    const imagesData = await handleGetImages();

    if (imagesData.images) {
      setThumbs(imagesData.images)
    } 
  };

  useEffect(() => {
    onGetImages();
  },[]);

  return (
    <Layout>
      <StyledThumbsWrapper>
        <Row>
          {thumbs.map((image:ThumbData) => (
            <StyledCol key={image.id} xs={12} sm={4} xl={3}>
              <Thumb
                id={image.id}
                src={image.src}
                title={image.title}
              />
            </StyledCol>  
          )) }
        </Row>
      </StyledThumbsWrapper>
    </Layout>
  )
};

export default HomePage;
