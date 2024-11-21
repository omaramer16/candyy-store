import React from 'react'
import boy1 from '../Boysgifts/IMG-20241023-WA0008.jpg'
import boy2 from '../Boysgifts/IMG-20241017-WA0048.jpg'
import boy3 from '../Boysgifts/IMG-20241017-WA0047.jpg'
import boy4 from '../Boysgifts/IMG-20241017-WA0044.jpg'
import boy5 from '../Boysgifts/IMG-20241006-WA0055.jpg'
import boy6 from '../Boysgifts/IMG-20241006-WA0054.jpg'
import boy7 from '../Boysgifts/IMG-20241006-WA0052.jpg'
import boy8 from '../Boysgifts/IMG-20241006-WA0050.jpg'
import boy9 from '../Boysgifts/IMG-20241006-WA0047.jpg'
import boy10 from '../Boysgifts/IMG-20241017-WA0045.jpg'



 function Boysgifts() {
  return (
    <div>
    <h1 className='text-center mt-5' style={{ color: 'black', margin: '20px 0' }}>Boysgifts</h1>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
      <div className="col">
        <div className="w-75 mx-auto">
          <img src={boy1} className="w-100" alt="Image" />
          <h4 className="card-title text-center md-4">Boysgifts</h4>
        </div>
      </div>
      <div className="col">
        <div className="w-50 mx-auto">
          <img src={boy2} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Boysgifts</h4>
        </div>
      </div>
      <div className="col">
        <div className="w-75 mx-auto">
          <img src={boy3} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Boysgifts</h4>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
      <div className="col">
        <div className="w-75 mx-auto">
          <img src={boy4} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Boysgifts</h4>
        </div>
      </div>
      <div className="col">
        <div className="w-85 mx-auto">
          <img src={boy5} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Boysgifts</h4>
        </div>
      </div>
      <div className="col">
        <div className="w-75 mx-auto">
          <img src={boy6} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Boysgifts</h4>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
      <div className="col">
        <div className="w-85 mx-auto">
          <img src={boy7} className="w-100" alt="Image" />
          <h4 className="card-title text-center md-4">Boysgifts</h4>
        </div>
      </div>
      <div className="col">
        <div className="w-85 mx-auto">
          <img src={boy8} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Boysgifts</h4>
        </div>
      </div>
      <div className="col">
        <div className="w-85 mx-auto">
          <img src={boy9} className="card-img-top" alt="Image" />
          <h4 className="card-title text-center md-3">Boysgifts</h4>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-5">
      <div className="col-6">
        <div className=" w-75 text-center m-auto">
        <img src={boy10} className="card-img-top" alt="Image" />
          <div className="card-body">
            <h3 className="card-title">Boysgifts</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Boysgifts;