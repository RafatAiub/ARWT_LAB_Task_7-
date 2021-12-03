import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

function ProductList() {
  const [data, setData] = useState([]);


  useEffect( () => {
    getData();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete/"+id,{
      method: 'DELETE'
    });
    result = await result.json();
    alert(result.result);
    getData();
  }

  async function getData()
  {
    let result = await fetch("http://127.0.0.1:8000/api/product");
    result = await result.json();
    setData(result)

  }

  return (
    <div>
      <Header />
      <h1>ProductList</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Product Rating</th>
              <th>Product View</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item) =>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.p_code}</td>
                  <td>{item.p_name}</td>
                  <td>{item.p_category}</td>
                  <td>{item.p_desc}</td>
                  <td>{item.p_price}</td>
                  <td>{item.p_rating}</td>
                  <td><img style={{ width: 120, height: 70 }} src={"http://127.0.0.1:8000/" + item.file_path} /></td>
                  <td><Button onClick={() => deleteOperation(item.id)} variant="outline-danger">Delete</Button></td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>

    </div>
  );
}

export default ProductList;