import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Test from './components/Test';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Test/>
    </ChakraProvider>
  );
}

export default App;
