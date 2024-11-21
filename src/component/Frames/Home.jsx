import React from 'react'
import Frames1 from '../Frames/صورة واتساب بتاريخ 1446-04-25 في 18.08.59_cb078976.jpg';
import Frames2 from '../Frames/صورة واتساب بتاريخ 1446-04-25 في 18.08.59_2127cbf8.jpg';
import Frames3 from '../Frames/صورة واتساب بتاريخ 1446-04-25 في 18.08.58_d41b066f.jpg';
import Frames4 from '../Frames/صورة واتساب بتاريخ 1446-04-25 في 18.08.58_99c26c47.jpg';
import Frames5 from '../Frames/IMG-20241017-WA0050.jpg';
import Frames8 from '../Frames/IMG-20241017-WA0031.jpg';
import Frames7 from '../Frames/IMG-20241017-WA0030.jpg';
import Frames6 from '../Frames/IMG-20241017-WA0029.jpg';
import Frames9 from '../Frames/IMG-20241014-WA0004.jpg';
import Frames10 from '../Frames/IMG-20241006-WA0039.jpg';
export default function Home() {
  return ( 
  <>
  
  <div>
      <h1 className='text-center mt-5' style={{ color: 'black', margin: '20px 50' }}>Frames</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 round-pill">
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Frames1} className="w-100" alt="Image" />
            <h4 className="card-title text-center md-4">Frames</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Frames2} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Frames</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Frames3} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Frames</h4>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 round-circle">
        <div className="col round-circle">
          <div className="w-65 round-circle mx-auto">
            <img src={Frames4} className="card-img-top round-circle" alt="Image" />
            <h4 className="card-title text-center md-3">Frames</h4>
          </div>
        </div>
        <div className="col round-circle">
          <div className="w-75 round-circle mx-auto mb-7">
            <img src={Frames5} className="card-img-top round-circle" alt="Image" />
            <h4 className="card-title text-center md-3">Frames</h4>
          </div>
        </div>
        <div className="col round-circle">
          <div className="w-75 round-circle mx-auto">
            <img src={Frames6} className="card-img-top round-circle" alt="Image" />
            <h4 className="card-title text-center md-3">Frames</h4>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 round-pill">
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Frames7} className="w-100" alt="Image" />
            <h4 className="card-title text-center md-4">Frames</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Frames8} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Frames</h4>
          </div>
        </div>
        <div className="col">
          <div className="w-75 mx-auto">
            <img src={Frames9} className="card-img-top" alt="Image" />
            <h4 className="card-title text-center md-3">Frames</h4>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <div className=" w-50 text-center m-auto">
            <img src={Frames10} className="card-img-top" alt="Last Image" />
            <div className="card-body">
              <h3 className="card-title">Frames</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  
  
  
  
  
  
  </>
   
  )
}
