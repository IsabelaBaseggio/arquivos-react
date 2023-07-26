function Pessoa({nome, idade, profissao, foto}) { // condensando os atributos de props em variáveis / argumentos, então, ao invés de usar, por exemplo, props.nome, usa só nome
    // tem que ser na mesma ordem que foram passados os atributos no componete Pessoa
    return (
        <div>
            <img src={foto} alt={nome}></img>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;