import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from './components/list';
import './App.css';

function App() {
  return (
    <div>
        <Container className="center">
            <div>Загаловок для списка</div>
            <List />
        </Container>
    </div>
  );
}

export default App;
