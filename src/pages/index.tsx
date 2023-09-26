import { Inter } from 'next/font/google';
import Questao from '@/components/Questao';
import RespostaModel from '@/model/resposta';
import QuestaoModel from '@/model/questao';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

const questaoMock = new QuestaoModel(1, 'Qual é a melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.certa('Azul'),
  RespostaModel.errada('Amarelo'),
  RespostaModel.errada('Lilas'),
]);
export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function respostaFornecida(indice: number) {
    console.log(indice);
    setQuestao(questao.responderCom(indice));
  }

  function tempoEsgotado() {
    if (questao.naoRespondida) {
      setQuestao(questao.responderCom(-1));
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Questao
        valor={questaoMock}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      />
    </div>
  );
}
