import Item from "./Item";

function List(){

    return (
        // Fragment é uma tag vazia <> e </> ou invés de <div> e </div>
        // se o objetivo precisa de uma div utiliza-se uma div mesmo
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari"></Item>
                <Item marca="Fiat"></Item>
                <Item marca="Renault"></Item>
            </ul>
        </>
    )

}

export default List;