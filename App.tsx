import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

import { Feed } from '@screens/Feed'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Feed />
    </ThemeProvider>
  );
}
