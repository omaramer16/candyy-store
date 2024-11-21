import React from 'react';
import { useNavigate } from 'react-router-dom';
import n from '../img/IMG-20241023-WA0012.jpg';
import i from '../img/IMG-20241006-WA0064.jpg';
import y from '../img/IMG-20241006-WA0011.jpg';
import a from '../img/IMG-20241017-WA0031.jpg';
import o from '../img/IMG-20241017-WA0049.jpg';
import q from '../img/IMG-20241023-WA0008.jpg';
import s from '../img/IMG-20241006-WA0016.jpg';


export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center">
        <img src={n} alt="" className="w-50 h mx-auto d-block mt-5 md-5" />
        <div className="d-flex justify-content-center align-items-center mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-gift" viewBox="0 0 16 16">
            <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"/>
          </svg>
          <h4 className="mt-3">Choose what you want</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-gift" viewBox="0 0 16 16">
            <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"/>
          </svg>
        </div>
      </div>
      <div>
  
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 round-pill">
        <div className="col">
          <div className="h-25">
            <img src={i} className="w-100" alt="" />
            <h4 className="card-title text-center md-4">Bouquet Flowers</h4>
            <div className="container">
              <button
                className="w-25 btn bg-black bg-gradient text-white"
                onClick={() => navigate('/bouquet-flowers')}
              >
                Click here
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="w-100">
            <img src={y} className="card-img-top" alt="" />
            <h4 className="card-title text-center md-3">Girls gifts</h4>
            <div className="container1">
              <button
                className="w-25 btn bg-black bg-gradient text-white md-4"
                onClick={() => navigate('/girls-gifts')}
              >
                Click here
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="w-100">
            <img src={a} className="card-img-top" alt="" />
            <h4 className="card-title text-center md-3">Frames</h4>
            <div className="container2">
              <button
                className="w-25 btn bg-black bg-gradient text-white md-4"
                onClick={() => navigate('/frames')}
              >
                Click here
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 round-circle">
        <div className="col round-circle">
          <div className="w-100 round-circle">
            <img src={o} className="card-img-top round-circle" alt="" />
            <h4 className="card-title text-center md-3">Mobile cases</h4>
            <div className="container3">
              <button
                className="round-circle w-25 btn bg-black bg-gradient text-white md-4"
                onClick={() => navigate('/mobile-cases')}
              >
                Click here
              </button>
            </div>
          </div>
        </div>
        <div className="col round-circle">
      <div className="w-100 round-circle">
        <img src={q} className="card-img-top round-circle" alt="" />
        <h4 className="card-title text-center md-3">Boys gifts</h4>
        <div className="container4">
          <button
            className="w-25 btn bg-black bg-gradient text-white md-4"
            onClick={() => navigate('/boys-gifts')}
          >
            Click here
          </button>
        </div>
      </div>
    </div>
        <div className="col round-circle">
          <div className="h-50 round-circle">
            <img src={s} className="w-100 round-circle" alt="" />
            <h4 className="card-title text-center md-3 round-circle">Ramadan</h4>
            <div className="container5">
              <button
                className="w-25 btn bg-black bg-gradient text-white md-4"
                onClick={() => navigate('/ramadan')}
              >
                Click here
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
