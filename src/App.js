import React from "react";
import "./App.css";
import {
  Layout,
  Navigation,
  Header,
  Drawer,
  Content,
  Footer,
  FooterLinkList,
  FooterSection,
} from "react-mdl";
import Main from "./modules/components/Main";

const logo = require("./assets/final_logo.png");
function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="XTrajoy" className="Navigation" scroll>
          <img alt="XTraJoy" src={logo} width="50px"></img>
          <Navigation>
            <a href="/">Home</a>
            <a href="/">Sobre Nós</a>
            <a href="#contact">Contato</a>
          </Navigation>
        </Header>
        <Drawer title="XTrajoy">
          <Navigation>
            <a href="/">Home</a>
            <a href="/">Sobre Nós</a>
            <a href="/">Contato</a>
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
