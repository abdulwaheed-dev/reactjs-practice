import React, { useReducer, useState } from "react";
import { Button } from "antd";
import { Input } from "antd";
import "./style.css";

const initialState = [
  { name: "product1", price: 100 },
  { name: "product2", price: 200 },
  { name: "product3", price: 300 },
  { name: "product4", price: 400 },
  { name: "product5", price: 500 },
  { name: "product6", price: 600 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      let newArr = [];
      state.map((item, index) => {
        if (index !== state.length - 1) {
          newArr.push(item);
        }
      });
      return newArr;
    default:
      return state;
  }
};

function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <h3 className="space">UseReducer Example</h3>
      <Input
        className="textbox2 space"
        placeholder="Product Name"
        type="text"
        name="name"
        id="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br />
      <Input
        className="textbox2 space"
        placeholder="Product Price"
        type="text"
        name="price"
        id="price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />{" "}
      <br />
      <Button
        className="space"
        type="primary"
        onClick={() => dispatch({ type: "ADD", payload: { name, price } })}
      >
        Add Product
      </Button>
      <Button
        className="space"
        type="primary"
        onClick={() => dispatch({ type: "DELETE" })}
      >
        Delete Product
      </Button>
      <br />
      <span className="space">
        Products:
        <ul className="space">
          {state.map(({ name, price }) => {
            return (
              <li>
                {name} {price} <br />
              </li>
            );
          })}
        </ul>
      </span>
      <br />
    </div>
  );
}

export default ReducerExample;
