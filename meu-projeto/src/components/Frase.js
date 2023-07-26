import style from "./Frase.module.css"; // importando o módulo de css

function Frase(){
    return (
        <div className={style.fraseContainer}> {/* Aplicando o style criado no módulo Frase.module.css */}
            <p className={style.fraseContent}>Este é um componente com uma frase!</p>
        </div>
    )
}

export default Frase;