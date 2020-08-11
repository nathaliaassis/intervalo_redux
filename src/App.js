import React from 'react';
import { Row, Container} from 'react-bootstrap';

import './App.css';

import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo';

function App() {
  return (
     
    <div className="App">
      <Container fluid style={{padding: '48px'}}>
        <Row style={{display: 'flex', flex: '1'}}>
          
            <Intervalo />

        </Row>
        <Row style={{display: 'flex', width: '100%'}}>
        
            <Media />
        
            <Soma />
        
            <Sorteio />
        
        </Row>
      </Container>
    </div>
  );
}

export default App;
