import { render } from "@testing-library/react";

function NavBar() {
    return<>
        <img className="cartImage" src="./images/cart.png" alt="cart image"/>
        <h3>Tortuguita empanadas</h3>
        <CartWidget/>

    </>;

}

<NavBar/>

render=(<cartImage />, document.getElementById('root'));

export{NavBar, render}