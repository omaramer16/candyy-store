import React from 'react';
import Mob1 from '../Mobilecase/صورة واتساب بتاريخ 1446-04-25 في 18.08.59_b81dd9e3.jpg';
import Mob2 from '../Mobilecase/صورة واتساب بتاريخ 1446-04-25 في 18.08.59_682ea45b.jpg';
import Mob3 from '../Mobilecase/صورة واتساب بتاريخ 1446-04-25 في 18.08.59_60ade6fe.jpg';
import Mob4 from '../Mobilecase/IMG-20241017-WA0049.jpg';
import Mob5 from '../Mobilecase/IMG-20241017-WA0033.jpg';
import Mob6 from '../Mobilecase/IMG-20241017-WA0032.jpg';
import Mob7 from '../Mobilecase/IMG-20241006-WA0031.jpg';
import Mob8 from '../Mobilecase/IMG-20241006-WA0029.jpg';
import Mob9 from '../Mobilecase/IMG-20241006-WA0028.jpg';
import Mob10 from '../Mobilecase/IMG-20241006-WA0027.jpg';

function Mobilecase() {
  return (
    <div>
      <h1 className='text-center mt-5' style={{ color: 'black', margin: '20px 0' }}>Mobilecase</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Mob1} className="w-100" alt="Image" />
            <h4 className="card-title text-center md-4">Mobilecase</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Mob2} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Mobilecase</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Mob3} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Mobilecase</h4>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Mob4} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Mobilecase</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-50 mx-auto">
            <img src={Mob5} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Mobilecase</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Mob6} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Mobilecase</h4>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        <div className="col">
          <div className="w-85 mx-auto">
            <img src={Mob7} className="w-100" alt="Image" />
            <h4 className="card-title text-center md-4">Mobilecase</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Mob8} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Mobilecase</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Mob9} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Mobilecase</h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <div className=" w-50 text-center m-auto">
          <img src={Mob10} className="card-img-top" alt="Image" />
            <div className="card-body">
              <h3 className="card-title">Mobilecase</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilecase;
