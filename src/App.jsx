import Header from "./Header";
import Conteudo from "./Conteudo"; // Alterado para 'Conteudo' com C maiúsculo
import "./app.css";
import projetos from "./projectos/projetos";
function App(){ 
  return (
    <div className="conteudo-principal">
      <Header />
      <Conteudo />
       <projetos />
      <footer className="footer">
        <p>feito por americo orreia</p>
      </footer>
    </div>
  )
}

export default App;

