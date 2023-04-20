import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/products-slices';
import { addToCart } from '../rtk/slices/cart-slices';

const Products = () => {
    const products = useSelector((state) => state.products)
    console.log(products)

    const dispath = useDispatch()

    useEffect(() => {
        dispath(fetchProducts())
    }, [])

    return (
        <>
            <Container className='py-5'>
                <div className='row'>
                    {products.map((product) => (
                        <div className="col mt-5" key={product.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{height:"250px"}} src={product.image} />
                                <Card.Body>
                                    <Card.Title>{ product.title}</Card.Title>
                                    <Card.Text >
                                        {product.description.slice(0,100)}
                                    </Card.Text>
                                    <Card.Text >
                                        <h4>{ product.price}$</h4>
                                    </Card.Text>
                                    <Button variant="primary" onClick={() =>dispath(addToCart(product)) } >Add To Card</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
}

export default Products;