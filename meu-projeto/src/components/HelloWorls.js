import Frase from "./Frase"; // importando um componente

function HellowWorld(){ // criando o componete
    // componente inicia com letra maiúscula

    return ( // enviando o componente através do return
    // o contrúdo precisa ser englobado por uma tag pai, nesse caso é a div, mas pode ser fragments -> <> e </>
        <div>
            <h2>Meu primeiro componente</h2>         
            <Frase></Frase>   
        </div>
    )

}

export default HellowWorld; // exportando o componente