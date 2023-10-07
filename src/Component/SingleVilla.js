import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import villa1 from '../assets/Images/villa1.jpg';
import villa2 from '../assets/Images/villa2.jpg';
import villa3 from '../assets/Images/villa3.jpg';

const SingleVilla = () => {
    // "productId": 1,
    // "productName": "sweetHomes",
    // "address": "Indore",
    // "price": 354677.0,
    // "noOfRoom": 4,
    // "noOfBathroom": 3,
    // "maxOccupancy": 15,
    // "propertyOwner": "alphadot",
    // "propertyType": null,
    // "locationUrl": null,
    // "city": null,
    // "pool": null,
    const { id } = useParams();
    const [Villa, setVilla] = useState({});
    const [Amenities,setAmenities] = useState([]);

    useEffect(() => {
        axios.get(`/alpha-homes/productcontroller/getProductDetailsById/${id}`)
            .then((response) => {
                console.log(response.data);
                setVilla(response.data);
            }).catch((error) => {
                console.log(error);
            })
            axios.get(`/alpha-homes/productcontroller/getAmenitiesDetails/${id}`)
            .then((response) => {
                console.log(response.data);
                setAmenities(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [id]);

    return (
        <>
            <div className="row mb-3">
                <div className="col-lg-12">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner" style={{ maxHeight: '600px' }} >
                            <div className="carousel-item active">
                                <img src={villa1} className="d-block w-100" alt="villa 1" />
                            </div>
                            <div className="carousel-item">
                                <img src={villa2} className="d-block w-100" alt="villa 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={villa3} className="d-block w-100" alt="villa 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className=' mt-4 text-center'>
                    <h5>   {Villa.productName}</h5>
                    <h5>Address:  {Villa.address}</h5>
                    <h5>Price:  {Villa.price}</h5>
                    <h5>No of Rooms:  {Villa.noOfRoom}</h5>
                    <h5>No of Bathroom:   {Villa.noOfBathroom}</h5>
                    <h5>Max Occupancy:  {Villa.maxOccupancy}</h5>
                   </div>


                <div className='text-center'> <button type="button" class="btn btn-outline-primary">Book Now</button></div>
{/* {Amenities.map((str) => {
  // Perform an operation on each string element
  return str.toUpperCase(); // For example, converting each string to uppercase
})} */}
            </div>

        </>
    );
}

export default SingleVilla;
