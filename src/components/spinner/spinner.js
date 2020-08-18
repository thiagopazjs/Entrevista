import React, { memo } from 'react'

import styled from 'styled-components'

import colors from '../../utils/colors'

const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  width: 100px;
  height: 100px;

  & .path {
    stroke: ${colors.primary};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

const Spinner = () => (
  <StyledSpinner viewBox='0 0 50 50'>
    <circle
      className='path'
      cx='25'
      cy='25'
      r='20'
      fill='none'
      strokeWidth='3'
    />
  </StyledSpinner>
)

export default memo(Spinner)
