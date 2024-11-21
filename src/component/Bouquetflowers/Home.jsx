import React from 'react';
import z from '../Bouquetflowers/IMG-20241006-WA0063.jpg';
import d from '../Bouquetflowers/IMG-20241006-WA0060.jpg'; 
import v from '../Bouquetflowers/IMG-20241006-WA0062.jpg'; 
import m from '../Bouquetflowers/IMG-20241006-WA0064.jpg';  
import k from '../Bouquetflowers/صورة واتساب بتاريخ 1446-05-03 في 21.49.43_3d3360e0.jpg'; 
import l from '../Bouquetflowers/IMG-20241006-WA0067.jpg'; 
import i from '../Bouquetflowers/صورة واتساب بتاريخ 1446-05-03 في 22.25.21_6321dcbb.jpg';
import j from '../Bouquetflowers/IMG-20241006-WA0069.jpg'; 
import w from '../Bouquetflowers/صورة واتساب بتاريخ 1446-05-03 في 22.25.21_a307ae8a.jpg'; 
import f from '../Bouquetflowers/IMG-20241006-WA0068.jpg';  
import wr from '../Bouquetflowers/صورة واتساب بتاريخ 1446-05-05 في 08.55.37_2301ce5d.jpg';
import wf from '../Bouquetflowers/صورة واتساب بتاريخ 1446-05-05 في 08.55.17_338fd16c.jpg';
function Bouquetflowers() {
  return (
    <>
    
      <h1 className='text-center mt-5' style={{ color: 'black', margin: '20px 0' }}>Bouquet Flowers</h1>
      
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 round-pill">
          <div className="col">
            <div className="w-50 mx-auto">
              <img src={z} className="w-100" alt="Bouquet Flowers" />
              <h4 className="card-title text-center md-4">Bouquet Flowers</h4>
              <div className="container"></div>
            </div>
          </div>
          <div className="col">
            <div className="w-50 mx-auto">
              <img src={d} className="card-img-top" alt="Bouquet Flowers" />
              <h4 className="card-title text-center md-3">Bouquet Flowers</h4>
              <div className="container1"></div>
            </div>
          </div>
          <div className="col">
            <div className="w-50 mx-auto">
              <img src={v} className="card-img-top" alt="Bouquet Flowers" />
              <h4 className="card-title text-center md-3">Bouquet Flowers</h4>
              <div className="container2"></div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 round-circle">
          <div className="col round-circle">
            <div className="w-50 round-circle mx-auto">
              <img src={m} className="card-img-top round-circle" alt="Bouquet Flowers" />
              <h4 className="card-title text-center md-3">Bouquet Flowers</h4>
              <div className="container3"></div>
            </div>
          </div>
          <div className="col round-circle">
            <div className="w-50 round-circle mx-auto mb-7">
              <img src={k} className="card-img-top round-circle" alt="Bouquet Flowers" />
              <h4 className="card-title text-center md-3">Bouquet Flowers</h4>
              <div className="container4"></div>
            </div>
          </div>
          <div className="col round-circle">
            <div className="w-50 round-circle mx-auto">
              <img src={l} className="card-img-top round-circle" alt="Bouquet Flowers" />
              <h4 className="card-title text-center md-3">Bouquet Flowers</h4>
              <div className="container4"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 round-pill">
          <div className="col">
            <div className="w-50 mx-auto">
              <img src={i} className="w-100" alt="Bouquet Flowers" />
              <h4 className="card-title text-center md-4">Bouquet Flowers</h4>
              <div className="container"></div>
            </div>
          </div>
          <div className="col">
            <div className="w-50 mx-auto">
              <img src={j} className="card-img-top" alt="Bouquet Flowers" />
              <h4 className="card-title text-center md-3">Bouquet Flowers</h4>
              <div className="container1"></div>
            </div>
          </div>
          <div className="col">
            <div className="w-75 round-circle mx-auto mb-7">
              <img src={f} className="card-img-top" alt="Bouquet Flowers" />
              <h4 className="card-title text-center md-3">Bouquet Flowers</h4>
              <div className="container2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 round-pill">
          <div className="col">
            <div className="w-75 mx-auto">
              <img src={wr} className="w-100" alt="Bouquet Flowers" />
              <h4 className="card-title text-center md-4">Bouquet Flowers</h4>
              <div className="container"></div>
            </div>
          </div>
          <div className="col">
            <div className="w-85 mx-auto">
              <img src={w} className="card-img-top" alt="Bouquet Flowers" />
              <h4 className="card-title text-center md-3">Bouquet Flowers</h4>
              <div className="container1"></div>
            </div>
          </div>
          <div className="col">
            <div className="w-75 round-circle mx-auto mb-7">
              <img src={wf} className="card-img-top" alt="Bouquet Flowers" />
              <h4 className="card-title text-center md-3">Bouquet Flowers</h4>
              <div className="container2"></div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Bouquetflowers;
