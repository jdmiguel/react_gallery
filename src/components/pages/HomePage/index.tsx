import React, {
  useRef,
  useState,
  Dispatch,
  useCallback,
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-configurable-grid';
import styled from 'styled-components';

import { addImages } from '../../../store/actions';

import Layout from '../../layout';

import Loader from '../../core/Loader';
import Thumb from '../../core/Thumb';

import { getImages } from '../../../services';

import { ImageData, ImagesData, ImageExtendedData, ImagesExtendedData } from '../../../helpers/types';
import {
  MIN_FOOTER_VIEWS,
  INITIAL_PAGE,
  MAX_PAGES_ALLOWED,
  INITIAL_MAX_IMAGES_LOADED,
  MAX_IMAGES_LOADED_BY_SCROLL,
} from '../../../helpers/constants';

// Types
type RefineFn = (image: ImageExtendedData) => ImageData;

// Styles
const StyledThumbsWrapper = styled.div`
  margin: 40px 0;
  padding: 0 25px;
`;

const StyledCol = styled(Col)`
  position: relative;
  margin-bottom: 30px;
`;

// Utils
const getFirstTag = (text: string) => text.substring(0, text.indexOf(','));

const refineImages = (image: ImageExtendedData) => ({
  id: image.id,
  thumbSrc: image.webformatURL,
  largeSrc: image.largeImageURL,
  title: getFirstTag(image.tags),
  views: image.views,
  downloads: image.downloads,
  likes: image.likes
});

const handleLoadedImages = (images: ImagesExtendedData) => (fn: RefineFn) =>
  images.map((image: ImageExtendedData) => fn(image));

const handleGetImages = async (page: number, amount: number) => {
  const { data, status } = await getImages(page, amount);

  if (status === 200) {
    const images = handleLoadedImages(data.hits);

    return images(refineImages)
  }
};

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewedFooterCounterRef = useRef(1);
  const pageCounterRef = useRef(INITIAL_PAGE);

  const [currentImages, setCurrentImages]: [ImagesData | undefined, Dispatch<ImagesData>] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const onGetImages = useCallback(
    async (page = 1, amount = INITIAL_MAX_IMAGES_LOADED) => {
      setIsLoading(true);

      const loadedImages = await handleGetImages(page, amount);

      if (loadedImages) {
        const images =
          page === 1 
            ? loadedImages 
            : currentImages 
              ? [...currentImages, ...loadedImages] 
              : loadedImages;

        dispatch(addImages(loadedImages));
        setCurrentImages(images);
      }
    },
    [currentImages, dispatch],
  );

  useEffect(() => {
    onGetImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(currentImages && currentImages.length > 1){
      setIsLoading(false)
    }
  }, [currentImages]);

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
        {isLoading && <Loader />}
        <Row>
          {currentImages && currentImages.map((image: ImageData, index: number) => (
            <StyledCol key={`${image.id} + ${index}`} xs={12} sm={4} xl={3}>
              <Thumb id={image.id} src={image.thumbSrc} title={image.title} />
            </StyledCol>
          ))}
        </Row>
      </StyledThumbsWrapper>
    </Layout>
  );
};

export default HomePage;
