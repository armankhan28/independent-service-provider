import React from 'react';
import image1 from '../../../images/service/img-1.jpg'
import image2 from '../../../images/service/img-3.jpg'
import image3 from '../../../images/service/img2.jpg'
import image4 from '../../../images/service/img-4.jpg'
import image5 from '../../../images/service/img-5.jpg'
import image6 from '../../../images/service/img-6.jpg'
import Service from '../Service/Service';
const services = [
    {id:1, name: 'Taj Mahal', price:70, img:image1},
    {id:2, name: 'Sahara', price:100, img:image2},
    {id:3, name: 'Adventure & Tour', price:150, img:image3},
    {id:4, name: 'Boat Trip', price:40, img:image4},
    {id:5, name: 'Swimming', price:25, img:image5},
    {id:6, name: 'Surfing', price:80, img:image6},
]
const Services = () => {
    return (
        <div className='container'>
            <h1 className='mt-5'>Our Service</h1>
            <div className='row'>
                {
                    services.map(service => <Service
                     key={service.id}
                     service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;