import "./Header.css"
function Header(){
  let links = [
     {href: "https://google.com", nome:"home"},
     {href: "https://youtube.com", nome:"sobre mim"},
     {href: "https://facebook.com", nome:"projetos"}
  ]

  return (
    <header className="header">
      <h1>@americocorreia</h1>
      <ul className="links"> 
      {
        links.map((linkDaVez) => {
         return <li> <a href={linkDaVez.href}>{linkDaVez.nome}</a> </li>
        })
      }
      </ul>
    </header>
  )
}
export default Header 