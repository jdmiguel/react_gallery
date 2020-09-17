import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css }  from 'styled-components';
import { LazyImage } from 'react-lazy-images';

import Default from './default.png';

type ThumbProps = {
  id: number;
  src: string;
  title: string;
};

const ImageCSS = css`
  width: 100%;
  max-width: 600px;
  margin-bottom: 18px;
`;

const StyledThumb = styled(Link)`
  cursor: pointer;
  &:hover {
    > div{
      &:first-of-type{
        visibility: visible;
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;

const StyledOverlay = styled.div`
  position: absolute;
  left: 9%;
  top: 5%;
  width: 82%;
  height: 78%;
  z-index: 1;
  background-color: rgba(255,255,255,0.7);
  transition: opacity, transform 0.3s ease-out;
  visibility: hidden;
  opacity: 0;
  transform: scale(0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: ${({theme}) => theme.palette.PRIMARY_DARK};
`;

const StyledImage = styled(LazyImage)`
  ${ImageCSS}
`;

const StyledDefault = styled.img`
  ${ImageCSS}
`;

const Thumb: React.FC<ThumbProps>  = ({id, src, title}) => (
  <StyledThumb to={`detail/${id}`}>
    <StyledOverlay>
      {title}
    </StyledOverlay>
    <StyledImage
        src={src}
        alt={title}
        placeholder={({ imageProps, ref }) => (
          <div ref={ref} className="LazyImage-Placeholder">
            <StyledDefault
              {...imageProps}
              src={Default}
              alt={title}
            />
          </div>
        )}
        actual={({ imageProps }) => (
          <div className="LazyImage-Actual">
            <img {...imageProps} alt={title} />
          </div>
        )}
      />
  </StyledThumb>
);

export default Thumb;