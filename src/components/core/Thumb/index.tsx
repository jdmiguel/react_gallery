import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css }  from 'styled-components';
import { LazyImage } from 'react-lazy-images';

import Default from './default.png';

export type ThumbProps = {
  id: number;
  src: string;
  title: string;
}

const ImageCSS = css`
  width: 100%;
  height: 100%;
  max-width: 600px;
  border: 1px solid ${({theme}) => theme.palette.LIGHT_MIN};
`;

const StyledThumb = styled(Link)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  
  > div{
    &:last-of-type{
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    > div{
      &:first-of-type{
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;

const StyledOverlay = styled.div`
  width: 91%;
  height: 100%;
  position: absolute;
  left: 5%;
  top: 1%;
  z-index: 1;
  background-color: rgba(229, 234, 237, 0.8);
  transition: opacity 0.3s ease-out;
  visibility: hidden;
  opacity: 0;
  transform: scale(0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledThumbText = styled.p`
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 400;
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
      <StyledThumbText>{title}</StyledThumbText>
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