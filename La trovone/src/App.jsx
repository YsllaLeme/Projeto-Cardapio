//real state
import {useState} from "react";
import restaurante from './assets/hashtaurante.webp';
import './App.css';
import { Navegacao } from './navegacao';
import { ItemCardapio } from './ItemCardapio';
import {PratosPrincipais, Sobremesas, Bebidas} from "./cardapio";

// variavel de controle const paginaSelecionada = 0;


export function App() {
  const paginaMenu = [PratosPrincipais, Sobremesas, Bebidas];
  const [paginaSelecionada, trocarPaginaSelecionada] = useState(0);

  return <>
          <img src={restaurante} alt="" className='capa' />
          <Navegacao trocarPaginaSelecionada={trocarPaginaSelecionada} />
          <div className="menu">
            {paginaMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}  />) } 
          </div>
          
          </>
}