import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div style={{ width: "100%" }} className="MainStyle">
          <Grid>
            <Cell col={12} className="LandingGrid">
              <h1 className="headersMain">Delivery inovador.</h1>
              <h1 className="headersMain"> Uma experiência única.</h1>
              <p className="SubHeader">
                Com a nossa solução, o caminho entre o pedido e o usuário será
                intermediado por nós, que garantiremos satisfação e felicidade
                para seus consumidores. Basta integrar nossa solução ao seu App
                e você rapidamente terá acesso a todos os nossos recursos.
              </p>
            </Cell>
          </Grid>
        </div>
        <div style={{ width: "100%", backgroundColor: "black" }}>
          <Grid>
            <Cell col={6}>
              <h3 className="subDelivery">Entrega Customizada</h3>
              <p className="pDelivery">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae. Vestibulum erat wisi, condimentum
              </p>
              <h3 className="subDelivery">Playlist Personalizada</h3>
              <p className="pDelivery">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, pharetra. Vestibulum erat wisi, condimentum
              </p>
            </Cell>
            <Cell col={6}>
              <img alt="" src="assets/food.jpg" width="100%" />
            </Cell>
          </Grid>
        </div>
        <div style={{ width: "100%" }} className='MainStyle'>
          <Grid>
            <Cell col={12} className='LandingGrid'>
              <h2 className="subDelivery">Gostou?</h2>
              <p className="pDelivery">
               Entre em contato conosco através do nosso e-mail: xxxxxxxxxxx
              </p>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
