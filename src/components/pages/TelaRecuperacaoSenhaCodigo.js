import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import '../../components/pages/TelaRecuperacaoSenha.css';

function TelaRecuperacaoSenhaCodigo() {
  const [codigo, setCodigo] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Função auxiliar para verificar se todos os dados estão preenchidos
  const dadosPreenchidos = () => codigo !== ''; // Adicione outras condições conforme necessário

  const handleAvancarClick = () => {
    if (!dadosPreenchidos()) {
      // Se os dados NÃO estiverem preenchidos, exiba o aviso
      setShowWarning(true);
    } else {
      // Se os dados estiverem preenchidos, navegue para a próxima tela
      navigate('/TelaConfirmarSenha');
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="logotipo-hotsteak">
        <Link to="/home">
          <img src="./assets/Logotipo Hot Steak.png" alt="Logotipo Hot Steak" />
        </Link>
      </div>
      <section>
        <h1 className="titulo-recuperacao-senha">RECUPERAÇÃO DE SENHA</h1>
        <p className="txt-inserir-dados">DIGITE O SEU CÓDIGO DE RECUPERAÇÃO</p>
        <input
          type="text"
          className="red-input-filled placeholder-small"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />

        {showWarning && (
          <p className="aviso-campo-obrigatorio" style={{ color: 'red', fontSize: '18px' }}>
            Por favor, preencha o código de recuperação!
          </p>
        )}

        <div className="botoes-tela-recuperacao-senha">
          <Link to="/TelaRecuperacaoSenha">
            <button className="voltar-button">Voltar</button>
          </Link>

          <button className="avancar-button" onClick={handleAvancarClick}>
            Enviar Código
          </button>
        </div>
      </section>
    </div>
  );
}

export default TelaRecuperacaoSenhaCodigo;