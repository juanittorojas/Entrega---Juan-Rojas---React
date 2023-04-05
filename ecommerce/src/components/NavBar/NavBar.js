import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>GreenSkies Studio</h3>
            <div>
                <button>Fotos Boda</button>
                <button>Video Boda</button>
                <button>Paquete Boda</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar