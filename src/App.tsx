// import "./App.css";
import { Title } from "./title/title";
import { Menu } from "./menu/menu";
import { Tabs } from "./tabs/tabs";
import styled from "styled-components";

function App() {
  return (
    <AppStyle className="App">
      <Title>Sign in</Title>
      <Menu />
      <Tabs />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  width: 1200px;
  margin: auto;
`;

export default App;
