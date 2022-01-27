import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Button from './components/Button';
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import TextArea from './components/TextArea';

const GlobalStyle = createGlobalStyle`
  /* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm459WxRxC7m0dR9pBOi.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm459WxRzS7m0dR9pBOi.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm459WxRxi7m0dR9pBOi.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm459WxRxy7m0dR9pBOi.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm459WxRyS7m0dR9pA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZFgrz8fZwjimrq1Q_.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZFgrz-PZwjimrq1Q_.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZFgrz8_Zwjimrq1Q_.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZFgrz8vZwjimrq1Q_.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZFgrz_PZwjimrqw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZbgjz8fZwjimrq1Q_.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZbgjz-PZwjimrq1Q_.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZbgjz8_Zwjimrq1Q_.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZbgjz8vZwjimrq1Q_.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZbgjz_PZwjimrqw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZSgnz8fZwjimrq1Q_.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZSgnz-PZwjimrq1Q_.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZSgnz8_Zwjimrq1Q_.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZSgnz8vZwjimrq1Q_.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUPjIg1_i6t8kCHKm459WxZSgnz_PZwjimrqw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRxC7m0dR9pBOi.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRzS7m0dR9pBOi.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRxi7m0dR9pBOi.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRxy7m0dR9pBOi.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRyS7m0dR9pA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gTD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3g3D_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gbD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gfD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gnD_vx3rCs.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gTD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3g3D_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gbD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gfD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gnD_vx3rCs.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gTD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3g3D_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gbD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gfD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gnD_vx3rCs.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3gTD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3g3D_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3gbD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3gfD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3gnD_vx3rCs.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gTD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3g3D_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gbD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gfD_vx3rCubqg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gnD_vx3rCs.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #1b2235;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
  }
`

const proofreadingOptions = [
  {
    id: 'ukr',
    text: 'Українська',
  },
  {
    id: 'rus',
    text: 'Російська',
  },
  {
    id: 'eng',
    text: 'Англійська',
  },
  {
    id: 'eng_nat',
    text: 'Англійська (носій)',
  },
];

const translatingOptions = [
  {
    id: 'ukrrus_eng',
    text: 'Українська/російська — англійська',
  },
  {
    id: 'eng_ukr',
    text: 'Англійська — українська',
  },
  {
    id: 'eng_rus',
    text: 'Англійська — російська',
  },
  {
    id: 'rus_ukr',
    text: 'Російська — українська',
  },
  {
    id: 'ukr_rus',
    text: 'Українська — російська',
  },
];

const App = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [textToEdit, setTextToEdit] = useState('');
  const [serviceType, setServiceType] = useState();
  const [language, setLanguage] = useState();
  const [fileExtention, setFileExtention] = useState();
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState();
  const [deadline, setDeadline] = useState();

  // For  check is button active
  useEffect(() => {
    if (email.length > 4 && name.length > 0
      && serviceType && language
      && (textToEdit.length > 0 || fileExtention)) {
      setButtonIsActive(true);
    } else {
      setButtonIsActive(false);
    }

  }, [email, name, textToEdit, serviceType, language, fileExtention]);

  // For calculation prace and deadline
  useEffect(() => {
    if ((textToEdit.length > 0 || fileExtention)
      && serviceType && language) {
        priceCalc();
        timeCalc();
    }
  }, [textToEdit, serviceType, language, fileExtention]);

  useEffect(() => {
    if (time) {
      deadlineCalc();
    }
  }, [time]);

  const changeEmailHandler = (e) => {
    const element = e.target;
    const value = element.value;
    setEmail(value);
  }

  const changeNameHandler = (e) => {
    const element = e.target;
    const value = element.value;
    setName(value);
  }

  const changeCommentHandler = (e) => {
    const element = e.target;
    const value = element.value;
    setComment(value);
  }

  const changeTextToEditHandler = (e) => {
    const element = e.target;
    const value = element.value;
    setTextToEdit(value);
  }

  const defineOptionsToShow = () => {
    if (!serviceType) {
      return null;
    }

    switch (serviceType.id) {
      case 'proofreading':
        return proofreadingOptions;
      case 'translation':
        return translatingOptions;
      default:
        return proofreadingOptions;
    }
  }

  //Calculations
  const extensionsList = ['doc', 'docx', 'rtf'];

  const extractFileExtention = (e) => {
    const uploadedFile = e.target.files[0];
    const uploadedName = uploadedFile.name;
    const fileType = uploadedName.split('.')[uploadedName.split('.').length - 1];
    setFileExtention(fileType);

    // const reader = new FileReader();
    // reader.onload = () => setUploadedFileText(reader.result);
  };

  const priceCalc = () => {
    const pricePerChar = language.id.includes('eng') ? 0.12 : 0.05;

    let finalPrice = Math.ceil(textToEdit.length * pricePerChar);

    if (pricePerChar === 0.12 && finalPrice < 120) {
      finalPrice = 120;
    } else if (pricePerChar === 0.05 && finalPrice < 50) {
      finalPrice = 50;
    }

    if (fileExtention && !extensionsList.includes(fileExtention)) {
      finalPrice = finalPrice + (finalPrice * 0.2);
    }
    
    setPrice(finalPrice);
  }

  const timeCalc = () => {
    const charsPerHour = language.id.includes('eng') ? 333 : 1333;

    let totalTime = ((0.5 + Math.ceil(2 * (textToEdit.length / charsPerHour)) / 2));

    if (textToEdit.length < charsPerHour) {
      totalTime = 1;
    }

    if (fileExtention && !extensionsList.includes(fileExtention)) {
      totalTime = totalTime + Math.ceil(2 * (totalTime * 0.2) / 2);
    }
    
    setTime(totalTime);
  }

  const roundedCurDateAndTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const dd = date.getDate();
    const hh = date.getMinutes() > 30 ? date.getHours() + 1 : date.getHours();
    const mm = (date.getMinutes() >= 1 && date.getMinutes() <= 30) ? 30 : 0;

    return new Date(year, month, dd, hh, mm);
  }

  const deadlineCalc = () => {
    const timeNeededForWork = time;
    const workingHours = 9;
    let hoursToAdd;
    let minutesToAdd;
    let businessDaysToAdd = Math.floor(timeNeededForWork / workingHours);;
    let businessWeeksToAdd = 0;

    if (businessDaysToAdd >= 5) {
      businessWeeksToAdd = Math.floor(businessDaysToAdd / 5);
      businessDaysToAdd = businessDaysToAdd % 5;
    }

    if (timeNeededForWork === Math.round(timeNeededForWork)) {
      hoursToAdd = timeNeededForWork;
      minutesToAdd = 0;
    } else {
      hoursToAdd = Math.floor(timeNeededForWork);
      minutesToAdd = 30;
    }

    hoursToAdd = Math.floor(timeNeededForWork % workingHours);

    let date = roundedCurDateAndTime();

    console.log('\b');
    // console.log('Rounded current Date And Time: ' + date);

    const thisDay = date.getDay();

    //If task came on weekend
    thisDay === 0 && date.setDate(date.getDate() + 1) && date.setHours(10) && date.setMinutes(0);
    thisDay === 6 && date.setDate(date.getDate() + 2) && date.setHours(10) && date.setMinutes(0);
    thisDay === 5 && date.getHours() >= 19 && date.setDate(date.getDate() + 3) && date.setHours(10) && date.setMinutes(0);

    const businessDaysToAddWithWeekend = thisDay + businessDaysToAdd >= 7 ? businessDaysToAdd + 2 : businessDaysToAdd;
    date.setDate(date.getDate() + (businessWeeksToAdd * 7) + businessDaysToAddWithWeekend);

    // console.log('On what day deadline is. Whithout  extra hours: ' + date);
    
    if ((date.getHours() + hoursToAdd) <= 19) {
      console.log('here!!!');
      console.log((date.getHours() + hoursToAdd));

      date.setHours(date.getHours() + hoursToAdd);
      date.setMinutes(date.getMinutes() + minutesToAdd);

      if (date.getHours() === 19 && date.getMinutes() === 30) {
        date.setDate(date.getDate() + 1);
        date.setHours(10);
        date.setMinutes(30);
      }

      if (date.getHours() === 20) {
        date.setDate(date.getDate() + 1);
        date.setHours(11);
        date.setMinutes(0);
      }

    } else if (((date.getHours() + hoursToAdd) > 19) && ((date.getHours() + hoursToAdd) < 24)) {
      date.setDate(date.getDate() + 1);
      date.setHours(10 + (date.getHours() + hoursToAdd - 19));
      date.setMinutes(date.getMinutes() + minutesToAdd);
    }
    
    date.getDay() === 6 && date.setDate(date.getDate() + 2);  // Could be!
  
    console.log('Time: ' + time);
    console.log('Business Weeks To Add: ' +  businessWeeksToAdd);
    console.log('Business Days To Add: ' +  businessDaysToAdd);
    console.log('Hours to add: ' + hoursToAdd);
    console.log('Minutes to add: ' + minutesToAdd);
    console.log('Deadline: ' + date);

    setDeadline(`${date}`);

  }

    // const deadlineFormating = () => {
      // if (date.getHours() >= 10 && (date.getHours() + timeNeededForWork) <= 19) {
      //   if (timeNeededForWork === 1) {
      //     setDeadline(`Здамо за: одну годину`);
      //   } else if (timeNeededForWork > 1 && timeNeededForWork <= 2) {
      //     setDeadline(`Здамо за: дві години`);
      //   } else if (timeNeededForWork > 2 && timeNeededForWork <= 3) {
      //     setDeadline(`Здамо за: три години`);
      //   }
      // }

    // }
  
  return (
    <>
      <GlobalStyle />
      <MainContainerStyled>
        <Wrapper>
          <Form>
            <MediumHeader>
              Замовити переклад або редагування
            </MediumHeader>

            <Dropdown
              placeholder="Послуга"
              variants={[
                {
                  id: 'proofreading',
                  text: 'Редагування',
                },
                {
                  id: 'translation',
                  text: 'Переклад',
                },
              ]}
              id="services"
              onChange={(type) => {
                setServiceType(type);
                setLanguage(undefined);
              }}
              value={serviceType}
            />

            <TextAreaContainerStyled>
              <TextArea
                value={textToEdit}
                onChange={changeTextToEditHandler}
              />

              <UploadAreaStyled
                isHidden={textToEdit !== ''}
              >
                <SpanStyled>Введіть текст або </SpanStyled>
                <LableStyled>завантажте файл
                  <InputFileStyled
                    id="uploadedFile"
                    type="file"
                    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, .rtf, .txt, .pdf, .zip"
                    onChange={extractFileExtention}
                  />
                </LableStyled>
              </UploadAreaStyled>
            </TextAreaContainerStyled>

            <InputsContainer>
              <Input
                placeholder="Ваша електронна пошта"
                value={email}
                onChange={changeEmailHandler}
              />

              <Input
                placeholder="Ваше ім’я"
                value={name}
                onChange={changeNameHandler}
              />

              <Input
                  placeholder="Коментар або покликання"
                  value={comment}
                  onChange={changeCommentHandler}
              />

              <Dropdown
                placeholder={serviceType && serviceType.id === 'translation' ? 'Мовна пара' : 'Мова' }
                variants={defineOptionsToShow()}
                onChange={(lang) => setLanguage(lang)}
                value={language}
              />
            </InputsContainer>
          </Form>

          <SubmitDivStyled>
            <PriceStyled>
              <NumberStyled>
                {price}
              </NumberStyled>
              <CurrencyStyled>
                грн
              </CurrencyStyled>
            </PriceStyled>
            <TimeStyled>
              {deadline}
            </TimeStyled>

            <Button
              text="Замовити"
              isEnable={buttonIsActive}
            />
          </SubmitDivStyled>
        </Wrapper>
      </MainContainerStyled>
    </>
  );
}

const MainContainerStyled = styled.main`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  max-width: 1280px;
  padding-top: 80px;
  padding-right: 60px;
  padding-left: 60px;
  margin-bottom: 120px;
`;

const Form = styled.div`
  width: 100%;
  max-width: 850px;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 720px;
  justify-content: space-between;
  align-items: center;
`;

const MediumHeader = styled.h3`
  width: 100%;
  margin-bottom: 78px;
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  max-width: 100%;
`;

const SubmitDivStyled = styled.div`
  padding-top: 108px;
  text-align: right;
`;

const PriceStyled = styled.div`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
`;

const NumberStyled = styled.div`
  margin-left: auto;
  font-size: 60px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: -.19px;
  text-align: right;
  color: #0068e4;
`;

const CurrencyStyled = styled.div`
  color: #0068e4;
  margin-bottom: 13px;
`;

const TimeStyled = styled.div`
  width: 100%;
  height: 24px;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  margin-bottom: 30px;
  color: #1b2235;
`;

const TextAreaContainerStyled = styled.div`
  width: 100%;
  max-width: 660px;
  position: relative;
`;

const UploadAreaStyled = styled.div`
  display: ${({isHidden}) => isHidden ? 'none' : 'block'};
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -.05px;
`;

const SpanStyled = styled.span`
  color: #a0a1a4;

`;
const LableStyled = styled.label`
  color: #0068e4;
  cursor: pointer;
`;

const InputFileStyled = styled.input`
  display: none;
`;

export default App;
