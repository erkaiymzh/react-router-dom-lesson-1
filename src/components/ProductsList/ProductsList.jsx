import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsList = ({getProducts, products, deleteProduct}) => {
    const [selectedProduct, setSelectedProduct] = useState("")
    const [hover, setHover] = useState("")
    
      useEffect(()=> {
        getProducts()
       }, [])
      //  console.log(deleteProduct);
      //квадр скобки это массив зависимостей
    return (
        <div className='container d-flex justify-content-around'>
            {products.map((item) => (<Card
            key={item.id}
            onClick={() => setSelectedProduct(item.id)}
            onMouseEnter={() => setHover(item.id)}
            onMouseLeave={() => setHover("")}
            style={{ width: '18rem', border: selectedProduct === item.id? "1px solid black" : "", backgroundColor: hover === item.id? "grey" : "white" }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
     {item.price}
    </Card.Text>
    <Link to={`/edit/${item.id}`}>
    <Button variant="primary">Edit</Button>
    </Link>
    <Button onClick={()=> deleteProduct(item.id)} variant="danger">Delete</Button>
    <Link to={"/details/" + item.id}>
    <Button variant="warning">Details</Button>
</Link>
  </Card.Body>
</Card>) )}
        </div>
    );
};

export default ProductsList;