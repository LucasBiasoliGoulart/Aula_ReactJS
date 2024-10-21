// Jogo da Velha
import { useState } from "react";

function Quadrado({valor, clickValor}) {
    return (
        <button className="quadrado" onClick={clickValor}>{valor}</button>
    );
}

// Tabuleiro
function Tabuleiro({VezDoX, valores, handleClick}) {
    let vencedor
    if(Rodadas > 4) {
        vencedor = verificarVencedor(valores);
    }

    let Mensagem;
    if (vencedor) {
        Mensagem = 'O vencedor é: ' + vencedor;
    }else {
        Mensagem = 'Vez do ' + (VezDoX ? 'X' : 'O')
    }

    return (
        <>
          <h3>{Mensagem}</h3>
          <div className="linha">
             <Quadrado valor={valores[0]} clickValor={() => handleClick(0)}></Quadrado>
             <Quadrado valor={valores[1]} clickValor={() => handleClick(1)}></Quadrado>
             <Quadrado valor={valores[2]} clickValor={() => handleClick(2)}></Quadrado>
          </div>
          <div className="linha"> 
             <Quadrado valor={valores[3]} clickValor={() => handleClick(3)}></Quadrado>
             <Quadrado valor={valores[4]} clickValor={() => handleClick(4)}></Quadrado>
             <Quadrado valor={valores[5]} clickValor={() => handleClick(5)}></Quadrado>
          </div>
          <div className="linha">
             <Quadrado valor={valores[6]} clickValor={() => handleClick(6)}></Quadrado>
             <Quadrado valor={valores[7]} clickValor={() => handleClick(7)}></Quadrado>
             <Quadrado valor={valores[8]} clickValor={() => handleClick(8)}></Quadrado>
          </div>
        </>
    );
}

// Verfificar o Vencedor
function verificarVencedor(valores) {
    const combinacoesPremiadas = [
        // Linhas
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Colunas
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonais (dp e ds)
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i=0; i < combinacoesPremiadas.length; i++) {
        const [pa, pb, pc] = combinacoesPremiadas[i];

        if(valores[pa] && valores[pa] === valores[pb] && valores[pb] === valores[pc]) {
            return valores[pa];
        }
    }

    return null;
}

// Jogo
function Jogo() {
    const [valores, setQuadrados] = useState(Array(9).fill(null));
    const [VezDoX, setVezDoX] = useState(true);
    const [Rodadas, setRodadas] = useState(0);

    function handleClick(indice) { // indice = 0
        if (Rodadas>4 && verificarVencedor(valores) || valores[indice]) { // valores[1]
            return; // saida da função
        }

        const novosQuadrados = valores.slice();
        novosQuadrados[indice] = VezDoX ? 'X' : 'O';
        setQuadrados(novosQuadrados);
        setVezDoX(!VezDoX);
        setRodadas(Rodadas+1);

        if(VezDoX) {
            novosQuadrados[indice] = 'X';
            setVezDoX(false);
        }else {
            novosQuadrados[indice] = 'O';
            setVezDoX(true);
        }
    }

    // Botão de reset
    function resetGame() {
        setQuadrados(Array(9).fill(null));
        setVezDoX(true);
        setRodadas(1);
    }

    return (
        <>
          <h1>Jogo da Velha {Rodadas}</h1>
          <button onClick={resetGame}>Reset</button>
          <Tabuleiro VezDoX={VezDoX} valores={valores} handleClick={handleClick}></Tabuleiro>
        </>
    );
}

export default Jogo;