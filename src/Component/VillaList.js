import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../Component/VillaCard'

const VillaList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('/alpha-homes/productcontroller/allProductDetails')
      .then((response) => {
        console.log(response.data);
        console.log(response.data[0].productData[0].image_data);
        setList(response.data);
        // const image = response.data[0].productData[0].image_data;
        // const imageData = new Uint8Array(response.data[0].productData[0].image_data);
        // const blob = new Blob([imageData], { type: 'application/pdf' });
        // const url = URL.createObjectURL(blob);
        // // Open the PDF in a new tab
        // var newTab = window.open(url, "_blank");
        // const image = response.data[0].productData[0].image_data;   
        // Assuming 'image' contains Base64-encoded image data
        // const dataURI = `data:image/jpeg;base64,${image}`;
        // Create a new Image object
        // const img = new Image();
        // Set the 'src' attribute of the Image object to the data URI
        // img.src = dataURI;
        // Append the Image object to your DOM to display it
        // list.body.appendChild(img);
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="card-list" style={{ textDecoration: 'none' }}>
      {list.map((card) => (
        <Link style={{ textDecoration: 'none' }} to={`/VillaList/${card.productId}`} key={card.productId}>
          <Card key={card.id} name={card.productName} address={card.address} price={card.price} image={card.img} />
        </Link>
      ))}
    </div>
  )
}

export default VillaList
