import React from "react";
import { phonesData } from "./product.data";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";

const Products = () => {
  const [items, setitems] = useState(phonesData);
  const decQty = (id) => {
    const newItem = items.map((item) => 
      item.id === id &&  item.Qty > 1 ?  { ...item, Qty: item.Qty - 1 } : item
    );
    setitems(newItem);
  };
  const incQty = (id) => {
    const newItem = items.map((item) => 
      item.id === id ? { ...item, Qty: item.Qty + 1 } : item
    );
    setitems(newItem);
  };
  return (
    <div>
      <h1 className="bg-info text-white text-center">Products</h1>
      {items.map((item) => (
        <div  className="d-inline-flex" key={item.id}>
          <Card
            className="shadow p-3 m-2 bg-body rounded"
            style={{ width: "12.5rem" }}
          >
            <Card.Img
              style={{ height: "12rem" }}
              className="p-2"
              variant="top"
              src={require(`./asets/${item.image}`)}
            />
            <Card.Body>
              <Card.Title>{item.model}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <h5>Price:₹{item.price}</h5>
              <div>
                <p>
                  Qty:
                  <Button onClick={() => decQty(item.id)} className="m-1">
                    -
                  </Button>
                  {item.Qty}
                  <Button onClick={() => incQty(item.id)} className="m-1">
                    +
                  </Button>
                </p>
              </div>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;
