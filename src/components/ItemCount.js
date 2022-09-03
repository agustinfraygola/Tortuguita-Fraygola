import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

const JamonQueso = {
    sabor: "Jamon y queso",
    stock: true,
    cantidad: 20,

}
//uso const porque tecnicamente no deberia variar los datos de las empanadas a menos que me pidan en un desafio



function ItemCount() {
    
    
    const [count, setCount] = useState(0);

    function sumaCantidad(JamonQueso, [count, setCount]) {
        if ({ count } < JamonQueso.cantidad) {
            setCount(count + 1)
        }

        else {
            setCount(count + 0)
        }
    }

    function restaCantidad([count, setCount]) {
        if ({ count } > 0) {
            setCount(count - 1)
        }

        else {
            setCount(count + 0)
        }
    }

    return(
        <div class="counter">
            <h1>{count}</h1>
            <div class="button_wrap">
                <button onClick={this.sumaCantidad}>Agregar empanada</button>
                <button onClick={this.restaCantidad}>Quitar empanada</button>

            </div>
        </div>
    )
}

ReactDOM.render(<ItemCount />, document.getElementById("root")); x 