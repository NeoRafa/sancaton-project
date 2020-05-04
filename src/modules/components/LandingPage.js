import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./LandingPage.css";

const avatarImg = require("../../assets/avatar.png");
const foodImg = require("../../assets/food.jpg");
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
        <div style={{ width: "100%", backgroundColor: "#333333" }}>
          <Grid>
            <Cell col={5}>
              <h5 className="subDelivery">Entrega Customizada</h5>
              <p className="pDelivery">
                Durante todas as etapas da entrega: preparo, pedido a caminho e
                pós venda, seu cliente receberá total atenção do nosso sistema,
                garantindo uma experiência única.
              </p>
              <h5 className="subDelivery">Playlist Personalizada</h5>
              <p className="pDelivery">
                Enviaremos playlists com músicas que atendam o perfil do seu
                cliente para ele enquanto ele espera ou degusta a comida.
              </p>
              <h5 className="subDelivery">Fotos durante o preparo</h5>
              <p className="pDelivery">
                Para aumentar a transparência com seu cliente, você poderá
                enviar para ele fotos durante o preparo do seu pedido, trazendo
                felicidade para ele.
              </p>
            </Cell>
            <Cell col={7}>
              <img alt="" src={foodImg} width="100%" />
            </Cell>
          </Grid>
        </div>
        <div style={{ width: "100%" }} className="MainStyle">
          <Grid>
            <Cell col={12} className="LandingGrid">
              <h2 className="subDelivery">Que somos</h2>
              <img
                width="180px"
                alt="Quem Somos"
                className="avatar-img"
                src={avatarImg}
              />
              <p className="pDelivery">
                Idealizados no Hackaton de FoodService Sancathon, nossa meta é
                ajudar pequenos e médios restaurantes a aumentar seus lucros
                através de uma experiência mais prazerosa para seus consumidores
                finais. Desenvolvendo em parceria com aplicativos de Delivery,
                pretendemos revolucionar a forma como o Delivery funciona no
                Brasil.
              </p>
            </Cell>
          </Grid>
        </div>
        <div style={{ width: "100%", backgroundColor: "#333333" }} id="contact">
          <Grid>
            <Cell col={8}>
              <h2 className="subDelivery">Gostou?</h2>
              <p className="pDelivery">
                Então entre em contato conosco o mais rápido possível!
              </p>
            </Cell>
            <Cell col={4}>
              <p className="pDelivery">
                Telefone: 
              </p>
              <p className="pDelivery">
                Email:
              </p>
              <p className="pDelivery">
                Instagram:
              </p>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LandingPage;
