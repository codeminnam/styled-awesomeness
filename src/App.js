import React, { Fragment } from 'react';
import styled from "styled-components";

function App() {
  return (
    <Container>
    <Button danger>Hellou</Button>
    <Button>Halo Halo</Button>
    </Container>
  );
}

const Container = styled.div`
  height:100vh;
  width:100%;
  background-color: orange;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus{
    outline:none;
  }
  background-color: ${props => props.danger? "#e74c3c": "#2ecc71"}
`;

export default App;
