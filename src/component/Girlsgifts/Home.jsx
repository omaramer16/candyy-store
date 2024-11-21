import React from 'react';
import to from '../Girlsgifts/IMG-20241006-WA0007.jpg';
import la from '../Girlsgifts/صورة واتساب بتاريخ 1446-05-04 في 02.45.59_c37950da.jpg';
import om from '../Girlsgifts/IMG-20241006-WA0011.jpg';
import er from '../Girlsgifts/IMG-20241006-WA0012.jpg';
import be from '../Girlsgifts/IMG-20241006-WA0045.jpg';
import bo from '../Girlsgifts/IMG-20241006-WA0048.jpg';
import ka from '../Girlsgifts/IMG-20241017-WA0042.jpg';
import re from '../Girlsgifts/IMG-20241017-WA0051.jpg';
import me from '../Girlsgifts/صورة واتساب بتاريخ 1446-04-25 في 18.08.57_fe31274d.jpg';
import sa from '../Girlsgifts/صورة واتساب بتاريخ 1446-05-04 في 02.45.59_5b6d0db5.jpg';

function Girlsgifts() {
  return (
    <div>
      <h1 className='text-center mt-5' style={{ color: 'black', margin: '20px 50' }}>Girlsgifts</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 round-pill">
        <div className="col">
          <div className="w-50 mx-auto">
            <img src={to} className="w-100" alt="Image" />
            <h4 className="card-title text-center md-4">Girlsgifts</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-50 mx-auto">
            <img src={la} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Girlsgifts</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-50 mx-auto">
            <img src={om} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Girlsgifts</h4>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 round-circle">
        <div className="col round-circle">
          <div className="w-50 round-circle mx-auto">
            <img src={er} className="card-img-top round-circle" alt="Image" />
            <h4 className="card-title text-center md-3">Girlsgifts</h4>
          </div>
        </div>
        <div className="col round-circle">
          <div className="w-50 round-circle mx-auto mb-7">
            <img src={be} className="card-img-top round-circle" alt="Image" />
            <h4 className="card-title text-center md-3">Girlsgifts</h4>
          </div>
        </div>
        <div className="col round-circle">
          <div className="w-50 round-circle mx-auto">
            <img src={bo} className="card-img-top round-circle" alt="Image" />
            <h4 className="card-title text-center md-3">Girlsgifts</h4>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 round-pill">
        <div className="col">
          <div className="w-50 mx-auto">
            <img src={ka} className="w-100" alt="Image" />
            <h4 className="card-title text-center md-4">Girlsgifts</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-50 mx-auto">
            <img src={re} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Girlsgifts</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-85 mx-auto">
            <img src={me} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Girlsgifts</h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <div className=" w-75 text-center m-auto">
            <img src={sa} className="card-img-top" alt="Last Image" />
            <div className="card-body">
              <h3 className="card-title">Girlsgifts</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Girlsgifts;

  
  
  
  
  
  
  
  
  
 