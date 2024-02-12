import './index.css'
import Game from './components/game'
import { ChakraProvider } from '@chakra-ui/react';
import { createStore } from 'redux'

function App() {
  return (
    <Game />
  )
}

export default App;
