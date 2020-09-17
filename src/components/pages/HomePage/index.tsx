import React, {
  useRef,
  useState,
  Dispatch,
  useCallback,
  useEffect,
} from 'react';
import { Row, Col } from 'react-configurable-grid';
import styled from 'styled-components';

import Layout from '../../layout';

import Thumb from '../../core/Thumb';

import { getImages } from '../../../services';

import { ThumbData, ImageExtendedData } from '../../../helpers/types';
import {
  DEFAULT_THUMBS,
  MIN_FOOTER_VIEWS,
  INITIAL_PAGE,
  MAX_PAGES_ALLOWED,
  INITIAL_MAX_IMAGES_LOADED,
  MAX_IMAGES_LOADED_BY_SCROLL
} from '../../../helpers/constants';

const StyledThumbsWrapper = styled.div`
  margin: 40px 0;
  padding: 0 25px;
`;

const StyledCol = styled(Col)`
  position: relative;
  margin-bottom: 30px;
`;

const getFirstTag = (text: string) => text.substring(0, text.indexOf(','));

const getThumbs = (image: ImageExtendedData) => ({
  id: image.id,
  src: image.webformatURL,
  title: getFirstTag(image.tags),
});

const handleDownloadedImages = (images: ImageExtendedData[]) => (
  formattedFuntion: any,
) => images.map((image: ImageExtendedData) => formattedFuntion(image));

const handleGetImages = async (page: number, numImages: number) => {
  const { data, status } = await getImages(page, numImages);

  if (status === 200) {
    const images = handleDownloadedImages(data.hits);

    return {
      thumbs: images(getThumbs),
    };
  }
};

const HomePage: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewedFooterCounterRef = useRef(1);
  const pageCounterRef = useRef(INITIAL_PAGE);

  const [thumbs, setThumbs]: [ThumbData[], Dispatch<ThumbData[]>] = useState(
    DEFAULT_THUMBS,
  );
  const [isLoading, setIsLoading] = useState(false);

  const onGetImages = useCallback(
    async (page = 1, numImages = INITIAL_MAX_IMAGES_LOADED) => {
      setIsLoading(true);

      const images = await handleGetImages(page, numImages);

      if (images?.thumbs) {
        const currentThumbs =
          page === 1 ? images.thumbs : [...thumbs, ...images.thumbs];
        setThumbs(currentThumbs);
      }
    },
    [thumbs],
  );

  useEffect(() => {
    onGetImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [thumbs]);

  const handleOnViewFooter = useCallback(() => {
    viewedFooterCounterRef.current++;

    if (
      viewedFooterCounterRef.current >= MIN_FOOTER_VIEWS &&
      !isLoading &&
      pageCounterRef.current < MAX_PAGES_ALLOWED
    ) {
      pageCounterRef.current++;
      onGetImages(pageCounterRef.current, MAX_IMAGES_LOADED_BY_SCROLL);
    }
  }, [isLoading, onGetImages]);

  return (
    <Layout onViewFooter={handleOnViewFooter}>
      <StyledThumbsWrapper ref={wrapperRef}>
        <Row>
          {thumbs.map((image: ThumbData, index: number) => (
            <StyledCol key={`${image.id} + ${index}`} xs={12} sm={4} xl={3}>
              <Thumb id={image.id} src={image.src} title={image.title} />
            </StyledCol>
          ))}
        </Row>
      </StyledThumbsWrapper>
    </Layout>
  );
};

export default HomePage;
