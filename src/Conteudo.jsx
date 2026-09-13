import { useState } from "react";
import "./conteudo.css"
function Conteudo(){
  const [artigo, setArtigo] =useState("")
 // const[nome, setNome] =useState("nome inicial")
 // const [numero, setNumero] =useState(0)
  function botao(){
   // setNome("novo nome")
   //  setNumero(numero + 1)
   setArtigo("sou programador web estou a trabalhar a  5 anos sem experiencia")
  }

  return (
    <main className="conteudo">
      <section className="conteudo-testuais">
      <h2 className="introducao">Meu nome é @americocorreia</h2>
      <h3>sou desenvolvedor web</h3>
      <button className="saiba-mais" onClick={botao}>
      saiba mais
      </button>
      <article>
        {artigo}
      </article>
      </section>
       <img className="ilustracao" src="src/assets/hero.png" alt="" />
    </main>
  )
}

export default Conteudo; // Certifica-te de que esta é a última linha deste arquivo
