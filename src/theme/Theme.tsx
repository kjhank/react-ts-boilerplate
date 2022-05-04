/* eslint-disable sort-keys */
import React from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

import { ThemeProps } from './Theme.types';
import { Reset } from './Reset';

export const mainTheme: DefaultTheme = {
  colors: {
    accent: '#7cac3e',
    main: 'rgb(35, 45, 105)',
    sub: '#fff',
  },
  fonts: {
    heading: '\'Caveat Brush\', serif',
    text: '\'Avenir Next\', sans-serif',
  },
  getColor: (color: keyof typeof mainTheme.colors = 'main') => mainTheme.colors[color],
  getFont: (family: keyof typeof mainTheme.fonts = 'text') => mainTheme.fonts[family],
  getTransitions: (properties: string[], duration: keyof typeof mainTheme.transitions = 'default'): string => properties.map(property => `${property} ${mainTheme.transitions[duration] || mainTheme.transitions.default}ms`).join(', '),
  transitions: {
    fast: '200',
    default: '400',
    slow: '600',
  },
};

export { styled };

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={mainTheme}>
    <Reset />
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
