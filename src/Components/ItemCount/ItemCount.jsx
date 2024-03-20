import React from 'react'

const ItemCount = () => {

    const [contador, setContador] = useState(1);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }

    }


    return (
        <>
            <div>
                <button onClick={decrementar}>-</button>
                <p>{contador}</p>
                <button onClick={incrementar}>+</button>
            </div>

            <div>
                <button className="btnDetalle">Agregar al carrito</button>
            </div>

        </>
    )
}

export default ItemCount
