import PropTypes from 'prop-types'; // se importa o com P maiúscilo

function Item({marca, ano_lancamento}){

    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )

}

// validando os valores das propriedades do componente Item
// se chama a propriedade com p minúscilo
Item.propTypes = {
    // se chama o objeto com P maiúscilos
    marca: PropTypes.string.isRequired, // está indicando que a propriedade marca só deve receber valor do tipo string e isRequired que ela é obrigatória, ou seja, é obrigatório passar algum valor para essa propriedade
    ano_lancamento: PropTypes.number, // está indicando que a propriedade ano_lancamento só deve receber valor do tipo number
}

// definindo um valor padrão para as propriedades do componente Item
// se deixa um valor padrão o isRequired não é mais necessário, pois mesmo que não seja passado nenhum valor, ele terá um valor padrão pré-setado
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item;