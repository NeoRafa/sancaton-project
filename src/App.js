import React from "react";
import "./App.css";
import { Layout, Navigation, Header, Drawer, Content } from "react-mdl";
import Main from './modules/components/Main';
function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="XTraJoy" className="Navigation" scroll>
          <Navigation>
            <a href="/">Home</a>
            <a href="/">Sobre Nós</a>
            <a href="/">Contato</a>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content">
            <Main />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
