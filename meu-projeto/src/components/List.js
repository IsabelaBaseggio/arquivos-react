import Item from "./Item";

function List(){

    return (
        // Fragment é uma tag vazia <> e </> ou invés de <div> e </div>
        // se o objetivo precisa de uma div utiliza-se uma div mesmo
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1975}></Item> {/* número como valor de propriedade precisa ser colcoada ente chaves -> {} */}
                <Item marca="Fiat" ano_lancamento={1964}></Item>
                <Item marca="Renault" ano_lancamento={1987}></Item>
                <Item></Item>
            </ul>
        </>
    )

}

export default List;