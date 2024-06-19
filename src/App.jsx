import NavBar from "./componentes/NavBar"
import LuzVerde from "./assets/luz-verde.png"
import XBoxImage from "./assets/xbox.png"
import Controller from "./assets/controle-xbox.png"
import conteudo from "./componentes/Conteudo";
import Card from "./componentes/Card";
import Arrow from "./assets/arrow.png"
import ArrowReverse from "./assets/arrow-dark.png";
import LogoXBox from './assets/logo-xbox.svg'
export default function App() {
  const LuzVerdeURL = `url(${LuzVerde})`;
  return (
    <>
      <div className="font-principal bg-preto w-full h-full"> 
        <NavBar/>
        <div className="flex flex-col items-center justify-center my-12 bg-cover" style={{ backgroundImage: LuzVerdeURL}}>
          <h1 className="text-4xl font-semibold text-branco">Xbox series X</h1>
          <h2 className="text-verde font-bold mb-8">PEDIDO ANTECIPADO</h2>
          <img src={XBoxImage} alt="Imagem de XBox" className="md:w-[800px]"/>
        </div>
        <div className="flex flex-col mt-36 items-center gap-12 mb-20 sm:flex-row sm:justify-evenly">
          <div className="flex flex-col items-center ">
            <h1 className="text-verde text-2xl font-semibold">Desempenho</h1>
            <h1 className="text-branco text-2xl font-semibold mb-5">aperfeiçoado</h1>
            <p className="text-texto text-center text-sm w-64">O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.</p>
          </div>
          <img src={Controller} alt="imagem de controle" className="w-52"/>
        </div>
        <div className="px-5 flex flex-wrap lg:flex-nowrap justify-center">
          {conteudo.map((conteudo,index) => (
            <Card
              key={index}
              image={conteudo.image}
              title={conteudo.title}
            />
          ))}
        </div>
        <div>
          <div className="flex items-center justify-center gap-1">
            <h1 className="text-verde text-2xl font-semibold">Perguntas</h1>
            <h1 className="text-branco text-2xl font-semibold">frequentes</h1>
          </div>
          <div className="flex flex-col p-5 text-branco text-xs gap-6 lg:px-56 md:px-32">
            <div className="flex items-center justify-between">
              <p>Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?</p>
              <img src={Arrow} alt="arrow" className="w-10"/>
            </div>
            <div>
              <p className="text-texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="flex items-center justify-between">
              <p>O que esta incluido no Xbox Series X?</p>
              <img src={ArrowReverse} alt="arrow" className="w-10"/>
            </div>
            <div className="flex justify-between items-center">
              <p>Como sei se minha TV é compativel com 4K?</p>
              <img src={ArrowReverse} alt="arrow" className="w-10"/>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-5 lg:px-56">
          <img src={LogoXBox} alt="logo do xbox" className='w-20'/>
          <p className="text-texto text-xs">@ Microsoft 2022 <br/>Todos os direitos reservados</p>         
        </div>
      </div>
    </>
  )
}