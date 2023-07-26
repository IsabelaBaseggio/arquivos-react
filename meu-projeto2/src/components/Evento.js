function Evento() {

    function meuEvento() { // função meuEvento que será chamada assim que o botão for clicado
        console.log("Opa, fui ativado!");
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button> {/* assim que o botão for clicado, vai chamar a função meuEvento passada no método onClick */}
        </div>
    )

}

export default Evento;