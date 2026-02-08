import { createGlobalStyle } from "styled-components";
import { colors, typography, spacing } from "./theme";

export const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 1rem;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${typography.fontFamily.primary};
    font-size: ${typography.fontSize.base};
    font-weight: ${typography.fontWeight.normal};
    line-height: ${typography.lineHeight.normal};
    color: ${colors.text};
    background-color: ${colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${typography.fontWeight.semibold};
    line-height: ${typography.lineHeight.tight};
    margin-bottom: ${spacing.md};
  }

  h1 {
    font-size: ${typography.fontSize["4xl"]};
  }

  h2 {
    font-size: ${typography.fontSize["3xl"]};
  }

  h3 {
    font-size: ${typography.fontSize["2xl"]};
  }

  h4 {
    font-size: ${typography.fontSize.xl};
  }

  h5 {
    font-size: ${typography.fontSize.lg};
  }

  h6 {
    font-size: ${typography.fontSize.base};
  }

  p {
    margin-bottom: ${spacing.md};
  }

  a {
    color: ${colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.primaryDark};
    }
  }

  /* Lists */
  ul, ol {
    margin-bottom: ${spacing.md};
    padding-left: ${spacing.xl};
  }

  li {
    margin-bottom: ${spacing.sm};
  }

  /* Forms */
  input,
  textarea,
  select {
    font-family: ${typography.fontFamily.primary};
    font-size: ${typography.fontSize.base};
    color: ${colors.text};
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  button {
    font-family: ${typography.fontFamily.primary};
    cursor: pointer;
    transition: all 0.3s ease;
  }

  /* Code */
  code, pre {
    font-family: ${typography.fontFamily.mono};
    background-color: ${colors.background};
    border-radius: 4px;
  }

  code {
    padding: 0.125rem 0.375rem;
  }

  pre {
    padding: ${spacing.md};
    overflow-x: auto;
    margin-bottom: ${spacing.md};
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 0.25rem;
    height: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.border};
    border-radius: 4px;

    &:hover {
      background: ${colors.lightGray};
    }
  }
`;

export default GlobalStyle;
