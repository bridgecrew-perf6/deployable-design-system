import { createGlobalStyle, css } from 'styled-components';
import MatterRegular from '../assets/fonts/Matter-Regular.woff';
import MatterRegularBold from '../assets/fonts/Matter-SemiBold.woff';
import MatterSQBold from '../assets/fonts/MatterSQ-Regular.woff';
import MatterSQSemiBold from '../assets/fonts/MatterSQ-SemiBold.woff';
import { color, typography } from './styles';

export const bodyStyles = css`
  @font-face {
    font-family: 'Matter';
    src: url(${MatterRegular}) format('woff');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Matter';
    src: url(${MatterRegularBold}) format('woff');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Matter SQ';
    src: url(${MatterSQBold}) format('woff');
  }

  @font-face {
    font-family: 'Matter SQ';
    src: url(${MatterSQSemiBold}) format('woff');
    font-weight: bold;
  }

  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  color: ${color.darkest};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }
  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
  }
  sub,
  sup {
    font-size: 0.8em;
  }
  sub {
    bottom: -0.2em;
  }
  sup {
    top: -0.2em;
  }
  b,
  em {
    font-weight: ${typography.weight.bold};
  }
  hr {
    border: none;
    border-top: 1px solid ${color.border};
    clear: both;
    margin-bottom: 1.25rem;
  }
  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2 - 1}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;
    color: ${color.secondary};
  }
  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;
    background: rgba(0, 0, 0, 0.05);
    color: ${color.darkest};
    border-radius: 3px;
    margin: 1rem 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;
