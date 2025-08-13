//importando a funcao do react que faz o estado estado de uma variavel mudar "hook"
import { useState } from "react";

function App() {
  //uma funcao que só é uasada para campos que vao sofrer alteracoes em um projeto, por exemplo um local que muda ao clicar um botao.
  //2 parametros -> primeiro é o valor do estado e segundo é o nome da funcao que vai fazer alteracao do estado e dento do useState é o valor inicial da estado
  const [message, setMassage] = useState("ola mundo");

  //faz uma funcao get retonar uma html "JSX"

  //retunr do por ter um elemento Ex: uma div que engloba tudo
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMassage("Ola fui clicado");
        }}
      >
        Mudar mensagem que esta no H1
      </button>
    </div>
  );
}

export default App;
