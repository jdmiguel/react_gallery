import React from 'react';
import styled, { css } from 'styled-components';
import { LazyImage } from 'react-lazy-images';

import Default from './defaultPhoto.png';

import Loader, { LoaderType } from '../Loader';

export type PhotoProps = {
  src: string | undefined;
  title: string | undefined;
};

const ImageCSS = css`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.PRIMARY};
`;

const StyledPhoto = styled.div`
  position: relative;
  overflow: hidden;
`;

const StyledOverlay = styled.div`
  width: 98%;
  position: absolute;
  left: 0;
  bottom: 5px;
  z-index: 1;
  background-color: rgba(229, 234, 237, 0.8);
  padding: 25px;
`;

const StyledPhotoText = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.palette.PRIMARY_DARK};
`;

const StyledImage = styled(LazyImage)`
  ${ImageCSS}
`;

const StyledDefault = styled.img`
  ${ImageCSS}
  height: 100%;
`;

const Photo: React.FC<PhotoProps> = ({ src, title }) => (
  <StyledPhoto>
    <StyledOverlay>
      <StyledPhotoText>{title}</StyledPhotoText>
    </StyledOverlay>
    {src && title && (
      <StyledImage
        src={src}
        alt={title}
        debounceDurationMs={500}
        loading={() => (
          <Loader type={LoaderType.LIGHT} />
        )}
        error={() => (
          <p>There was an error fetching this image :(</p>
        )}
        placeholder={({ imageProps, ref }) => (
          <div ref={ref} className="LazyImage-Placeholder">
            <StyledDefault {...imageProps} src={Default} alt={title} />
          </div>
        )}
        actual={({ imageProps }) => (
          <div className="LazyImage-Actual">
            <img {...imageProps} alt={title} />
          </div>
        )}
      />
    )}
  </StyledPhoto>
);

export default Photo;
