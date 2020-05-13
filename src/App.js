import React from 'react';
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }  
`;

function App(){
    return (
      <React.Fragment>
        <GlobalStyle/>
        <Container>
          <Button danger>Hellou</Button>
          <Button>Halo Halo</Button>
          <Anchor as="a" href="https://google.com">Go to google</Anchor>
        </Container>
      </React.Fragment>
  )
};

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
  background-color: ${props => props.danger? "#e74c3c": "#2ecc71"};
`;

const Anchor = styled(Button)`
  text-decoration:none;
`;

export default App;
