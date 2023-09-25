import { Inter } from 'next/font/google';
import Questao from '@/components/Questao';
import RespostaModel from '@/model/resposta';
import QuestaoModel from '@/model/questao';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const questaoTeste = new QuestaoModel(1, 'Melhor cor', [
    RespostaModel.errada('Verde'),
  ]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Questao valor={questaoTeste} />
    </div>
  );
}
