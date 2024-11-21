import React from 'react';
import Ramdan1 from '../Ramdan/IMG-20241006-WA0016.jpg'
import Ramdan2 from '../Ramdan/IMG-20241006-WA0026.jpg'
import Ramdan3 from '../Ramdan/IMG-20241017-WA0037.jpg'
import Ramdan4 from '../Ramdan/IMG-20241017-WA0038.jpg'
import Ramdan5 from '../Ramdan/IMG-20241017-WA0039.jpg'
import Ramdan6 from '../Ramdan/صورة واتساب بتاريخ 1446-04-25 في 18.08.57_f3eb1d6b.jpg'
import Ramdan7 from '../Ramdan/صورة واتساب بتاريخ 1446-04-25 في 18.08.58_819d49cc.jpg'
import Ramdan8 from '../Ramdan/صورة واتساب بتاريخ 1446-04-25 في 18.08.59_2ec29079.jpg'
import Ramdan9 from '../Ramdan/صورة واتساب بتاريخ 1446-04-25 في 18.08.59_f87075a8.jpg'
import Ramdan10 from '../Ramdan/IMG-20241017-WA0036.jpg'



function Ramdan() {
  return (
    <>
     <div>
    <h1 className='text-center mt-5' style={{ color: 'black', margin: '20px 0' }}>Ramadan</h1>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
      <div className="col">
        <div className="w-85 mx-auto">
          <img src={Ramdan1} className="w-100" alt="Image" />
          <h4 className="card-title text-center md-4">Ramadan</h4>
        </div>
      </div>
      <div className="col">
        <div className="w-75 mx-auto">
          <img src={Ramdan2} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Ramadan</h4>
        </div>
      </div>
      <div className="col">
        <div className="w-75 mx-auto">
          <img src={Ramdan3} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Ramadan</h4>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
      <div className="col">
        <div className="w-85 mx-auto">
          <img src={Ramdan4} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Ramadan</h4>
        </div>
      </div>
      <div className="col">
        <div className="w-85 mx-auto">
          <img src={Ramdan5} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Ramadan</h4>
        </div>
      </div>
      <div className="col">
        <div className="w-85 mx-auto">
          <img src={Ramdan6} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Ramadan</h4>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
      <div className="col">
        <div className="w-85 mx-auto">
          <img src={Ramdan7} className="w-100" alt="Image" />
          <h4 className="card-title text-center md-4">Ramadan</h4>
        </div>
      </div>
      <div className="col">
        <div className="w-75 mx-auto">
          <img src={Ramdan10} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Ramadan</h4>
        </div>
      </div>
      <div className="col">
        <div className="w-85 mx-auto">
          <img src={Ramdan9} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Ramadan</h4>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-5">
      <div className="col-6">
        <div className=" w-100 text-center m-auto">
        <img src={Ramdan8} className="card-img-top" alt="Image" />
          <div className="card-body">
            <h3 className="card-title">Ramadan</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    
    
    
    
    
    
    </>
    
  );
}

export default Ramdan;
