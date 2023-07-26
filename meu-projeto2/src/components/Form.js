function Form() {

    function cadastrarUsuario(e) { // função cadastrarUsuario que será chamada assim que o input type submit for clicado
        e.preventDefault(); // para evitar que a página recarregue assim que o formulário for enviado, pois, é padrão enviar o formulário para o back end e recarregar a página
        console.log("Cadastrou o usuário");
    }

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}> {/* assim que o input type submit for clicado, o método onSubmit aciona a função cadastrarUsuario */}
                <div>
                    <input type="text" placeholder="Digite o seu nome"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )

}

export default Form;