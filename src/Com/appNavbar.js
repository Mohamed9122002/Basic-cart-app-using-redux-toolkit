import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const AppNavbar = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart)
    return (
        <>
            <Navbar fixed='top' bg="light" expand="lg">
                <Container>
                    <Link to={'/'} className='navbar-brand'>CartApp</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={'/'} className='navbar-brand'>Products</Link>
                            <Link to={'cart'} className='navbar-brand'>Card- { cart.length}</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default AppNavbar;