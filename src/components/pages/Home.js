import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Loading from '../../components/loading/Loading';
import { Link } from 'react-router-dom';
import Carousel from '../../components/carousel/Carousel'
import '../../components/pages/Home.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simule um tempo de carregamento
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Tempo de carregamento simulado de 2 segundos
  }, []);

  return (
    <div className="design-tela-home">
      {isLoading ? (
        <Loading />
      ) : (
        // Se isLoading for false, exibe o conteúdo da página
        <>
          <Navbar />
          {/* ... Seu conteúdo da página ... */}
        </>
      )}
      <Carousel />
      <h2 id="menu" className="combos-hamburguer">
        COMBOS
      </h2>
      <div className="opcoes-hamburguer-container">
      <div className="combos">
        <div className="combo1">
          <img
            className="hamburguer1"
            src="./assets/combo-hamburguer1.jpg"
            alt="2 Hambúrgueres + Batata Frita + Refrigerante"
            title="2 Hambúrgueres + Batata Frita + Refrigerante"
          />
          <p>2 hambúrgueres +</p>
          <p>Batata Frita + Refrigerante</p>
        </div>
        <div className="combo2">
          <img className="hamburguer2" src="./assets/combo-hamburguer2.jpg" alt="3 Hambúrgueres" />
          <p>Triple Hotsteak Burguer</p>
        </div>

        <div className="combo3">
          <img className="hamburguer3" src="./assets/combo-hamburguer3.jpg" alt="Hambúrguer e Batata Frita" />
          <p>Hambúrguer + Batata Frita</p>
        </div>

        <div className="combo4">
          <img className="hamburguer4" src="./assets/combo-hamburguer4.jpg" alt="Combo Infantil" />
          <p>Hot Junior + Batata Frita</p>
        </div>

        <div className="combo5">
          <img className="hamburguer5" src="./assets/combo-hamburguer5.jpg" alt="Hambúrguer de frango + Batata Frita" />
          <p>Hot Costela + Batata Frita</p>
        </div>

        <div className="combo6">
          <img className="hamburguer6" src="./assets/combo-hamburguer6.png" alt="Combo vegano" />
          <p>Hambúrguer + Batata Frita</p>
        </div>
      </div>
    </div>
      <h2 className="txt-hamburgueres">HAMBÚRGUERES</h2>
      <div className="opcoes-hamburguer-container">
        <div className="grupo-1">
          <div className="opcao-hamburguer1">
            <img src="./assets/Hamburguer-1.webp" alt="Hamburguer Especial Hot Steak" />
            <h1 style={{ fontSize: '15px' }}>Especial Hot Steak</h1>
          </div>

          <div className="opcao-hamburguer2">
            <img src="./assets/opcao-cheddar-bacon-hamburgueres.png" alt="Cheddar e Bacon" />
            <h1 style={{ fontSize: '15px' }}>Cheddar e Bacon</h1>
          </div>

          <div className="opcao-hamburguer3">
            <img src="./assets/opcao-hamburguer-mega.webp" alt="Hamburguer Mega" />
            <h1 style={{ fontSize: '15px' }}>Mega</h1>
          </div>
        </div>

        <div className="grupo-2">
          <div className="opcao-hamburguer4">
            <img src="./assets/opcao-hotfrango-hamburgueres.png" alt="Hot Frango" />
            <h1 style={{ fontSize: '15px' }}>HotFrango</h1>
          </div>

          <div className="opcao-hamburguer5">
            <img src="./assets/opcao-black-burguer-hamburgueres.jpg" alt="Black Burguer" />
            <h1 style={{ fontSize: '15px' }}>Black Burguer</h1>
          </div>

          <div className="opcao-hamburguer6">
            <img src="./assets/opcao-x-tudo.jpeg" alt="X-Tudo" />
            <h1 style={{ fontSize: '15px' }}>X-Tudo</h1>
          </div>
        </div>
      </div>
      <h4>ACOMPANHAMENTOS</h4>
      <div className="opcao-acompanhamentos-container">
        <div className="opcao-acompanhamento1">
          <img src="./assets/opcao-batata-frita-acompanhamentos.png" alt="Batata Frita" />
          <p>Batata Frita</p>
        </div>

        <div className="opcao-acompanhamento2">
          <img src="./assets/opcao-macaxeira-frita-acompanhamentos.jpeg" alt="Macaxeira Frita" />
          <p>Macaxeira Frita</p>
        </div>
        <div className="opcao-acompanhamento3">
          <img src="./assets/opcao-nuggets-frango-acompanhamentos.jpg" alt="Nuggets de Frango" />
          <p>Nuggets de Frango</p>
        </div>
      </div>
      <footer id="contato">
        <div className="logo-hot-steak-miniatura">
          <img className="logotipo-hot-steak-miniatura" src="./assets/Logo Hamburgueria Hot Steak Miniatura.png" alt="Logotipo Miniatura Hot Steak" />
        </div>
        <p className="txt-rodape">COMPARTILHE ALGO 
        <br></br>DELICIOSO</p> 
        <div>
        <div className="contatos">
            <a href="#"><img src="./assets/logo-x.png" alt="Logotipo da Rede Social X (Antigo Twitter)" /></a>
            <a href="#"><img src="./assets/logo-instagram.png" alt="" /></a>
         </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;