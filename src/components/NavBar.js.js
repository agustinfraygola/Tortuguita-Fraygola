import ".stylesNavBar"
import {CartWidget} from './components/CartWidget.js'

export function NavBar() {
    return(
        <nav class="nav">
                <CartWidget/>
                <a href="/LaTortuguitaNavBar"><h2>La tortuguita</h2></a>
                <a href="/MenuNavBar"><h2>Menu</h2></a>
                <a href="/HistoriaNavBar"><h2>Historia</h2></a>
        </nav>
    )
}