import { render } from "@testing-library/react";

export class CartWidget {
    render(){
        return(
          <div>
           <img className="cartImage" src="./images/cart.png" alt="cart image"/> 

          </div>
        );
    }
}

//falta agregarle el bootstrap a la imagen, ponerle algo tipo el width y el height