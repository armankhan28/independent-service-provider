import React from 'react';
import { useNavigate } from 'react-router-dom';
const Service = ({service}) => {
    const {id,name, price, img} = service;
    const navigate = useNavigate();
    const navigateServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: '18rem' }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h5>Price: ${price}</h5>
            <p className="card-text">
            “The world is a book and those who do not travel read only one page.”
            </p>
            <button onClick={() => navigateServiceDetail(id)} className='btn btn-primary'>Book Now !</button>
          </div>
        </div>
        </div>
      );
    };

export default Service;