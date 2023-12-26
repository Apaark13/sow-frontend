import { useEffect, useState } from "react";
import React from 'react';
import "./table.scss"

interface TableProps {
  // You can define additional props as needed
}
interface RowType {
  article_no: number;
  product_name: string;
  inprice: number;
  price: number;
  unit: string;
  instock: number;
  description: string;
  // Add other properties as needed
}

// Assuming data is an array of RowType


const Table: React.FC<TableProps> = ({ /* destructure any additional props here */ }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://sow-gdch.onrender.com/api/pricelist/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
// data.map((datap,index)=>{
//     console.log(index,datap)
// })
    
    return (
    <table>
      <thead className="sticky-header">
        <tr>
        <th></th> 
          <th className="mobile"><div className="uparrow">Article No <img src="/assets/down_b.png" alt="" /></div></th>
          <th ><div className="uparrow">Product/Service <img src="/assets/down_g.png" alt="" /></div></th>
          <th className="portrait">Inprice</th>
          <th >Price</th>
          <th className="mobile">Unit</th>
          <th className="mobile">In Stock</th>
          <th className="portrait">Description</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* Add your table rows here */}
        {data.map((row: RowType, index: number) => (
          <tr key={index}>
            <td >{index==6?<img src="/assets/next.png" alt="" />: ""}</td>
            <td className="mobile">{row.article_no}</td>
            <td >{row.product_name}</td>
            <td className="portrait">{row.inprice}</td>
            <td >{row.price}</td>
            <td className="mobile">{row.unit}</td>
            <td className="mobile">{row.instock}</td>
            <td className="portrait">{row.description}</td>
            <td ><img src="/assets/more.png" alt="" /></td>
            <td ></td>
          </tr>
        ))}
        {/* <tr>
            <td><img src="/assets/next.png" alt="" /></td>
          <td>1</td>
          <td>Product A </td>
          <td>$10.00</td>
          <td>$15.00</td>
          <td>Each</td>
          <td>50</td>
          <td>Description for Product A</td>
            <td><img src="/assets/more.png" alt="" /></td>
        </tr> */}
        {/* Add more rows as needed */}
      </tbody>
    </table>
  );
};

export default Table;
