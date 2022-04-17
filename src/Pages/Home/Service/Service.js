import React from 'react';
const Service = ({service}) => {
    const {name, price, img} = service;
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
            <a href="#" className="btn btn-primary">
              BOOK NOW !
            </a>
          </div>
        </div>
        </div>
      );
    };

export default Service;