import { useEffect } from "react";

const { render } = require("@testing-library/react");
const { renderIntoDocument } = require("react-dom/test-utils");

function ItemListContainer() {
    ReactDOM.render(<p>aca es donde iria el texto provisional</p>);
}

const Container = () => {
    
    const [sabores, setSabores] = useState ([])

    useEffect(() => {
        const lista = ['Jamon y queso', 'Cuatro quesos', 'Carne', 'Queso y aceitunas']
        fetch(lista)
            .then( res => res.json)
            .then( data => {
                console.log(data.results);
                setSabores(data.results)
            })
    
    
    },[])

    return(
        <>
        <div>lista </div>
        <ItemList s={sabores}/>
        </>
    )
}

export{ ItemListContainer };