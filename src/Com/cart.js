import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import { clearToCart, deleteFromCart } from '../rtk/slices/cart-slices';

const Card = () => {
    const cart = useSelector((stat) => stat.cart)
    console.log(cart)
    const dispath = useDispatch()
    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    },0)
    return ( 
        <>
            <Container>
                <h1 className="mt-5">Welcome To Cart</h1>
                <Button variant='primary' className='mb-5' onClick={() => dispath(clearToCart())}>Clear Cart</Button>
                <h6>TotalPrice: {totalPrice}$</h6>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id }</td>
                                <td>{ product.title}</td>
                                <td><img style={{maxHeight:"50px"}} src={product.image} alt={product.title} /></td>
                                <td>{product.price}</td>
                                <td>{ product.quantity}</td>
                                <td><Button variant='danger' onClick={() => dispath(deleteFromCart(product))} > Delete</Button></td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>
    
        </>
    );
}

export default Card;
