function SayMyName(props){ // props é um objeto que recebe os atributos criados na criação do componente
    // exemplo
    // o componente SayMyName foi criado no componente App e lá tem os atributos que foram criados com ele, esses atributos viram atributos do objeto props
    return (
        // exemplo de JSX: usando JS no meio do HTML
        // tem que ser entre chaves -> {}
        <div>
            <p> Fala aí {props.nome}, suave?</p>
        </div>
    )

}

export default SayMyName;