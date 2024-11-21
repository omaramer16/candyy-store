import React from 'react';
import f from '../../Layout/Footer/IMG-20241023-WA0012.jpg';
import q from '../../Layout/Footer/IMG-20241006-WA0057.jpg';
import r from '../../Layout/Footer/IMG-20241006-WA0056.jpg';

export default function Footer() {
  return (
    <>
      <footer className=" text-center text-black w-100 mt-5">
        <h3 className="mx-auto mt-5">Need help in choosing the Flowers & Gifts?</h3>
        <a href="https://wa.me/201001523079" className="d-flex justify-content-center align-items-center mx-3 text-dark" style={{ textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg>
        </a>

        <div className="text-center">
          <img src={f} alt="" className="w-50 h mx-auto mt-5" />
          <h1 className="mt-5">Interested? Shop This Gifts Collection!</h1>
          <img src={q} alt="" className="w-25 mt-5" />
          <img src={r} alt="" className="w-25 h mt-5" />
          
          
          <div className="d-flex justify-content-between mt-5 m-5 col-md-8">
            <div>
              <h3>Important Links</h3>
              <h4>Privacy Policy</h4>
              <h4>Shipping Details</h4>
              <h4>Terms & Conditions</h4>
              <h4>Media Kit</h4>
            </div>
            <div className="text-end">
              <h3>Quick Links</h3>
              <h4>Know more About Us</h4>
              <h4>Visit Store</h4>
              <h4>Let’s Connect</h4>
            </div>
          </div>
        </div>

        <div className=" d-flex justify-content-center align-items-center mt-5">
      <a
        href="https://www.instagram.com/candyyy__storeee"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 social-icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-instagram"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
        </svg>
        <div className="social-text">candyyy shop</div>
      </a>

      <a
        href="https://wa.me/201001523079"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 social-icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326a7.75 7.75 0 0 0-13.267 7.832L.013 14.45a.946.946 0 0 0 .957 1.12l3.286-.766a7.753 7.753 0 0 0 3.706.946h.001a7.75 7.75 0 0 0 5.638-13.424zM8.001 14.055a6.304 6.304 0 0 1-3.23-.89l-.231-.138-2.448.57.524-2.376-.15-.239a6.306 6.306 0 1 1 5.535 3.073zm3.273-4.992c-.18-.09-1.066-.525-1.232-.585-.165-.06-.286-.09-.406.09-.12.18-.466.585-.572.705-.105.12-.21.135-.39.045-.18-.09-.76-.28-1.448-.89-.535-.48-.896-1.074-1.002-1.254-.105-.18-.011-.277.079-.367.08-.08.18-.21.27-.314.09-.105.12-.18.18-.3.06-.12.03-.225-.015-.314-.045-.09-.406-.97-.557-1.33-.146-.35-.293-.302-.406-.308h-.348c-.12 0-.314.045-.48.225s-.63.615-.63 1.5c0 .885.645 1.74.735 1.86.09.12 1.27 1.94 3.084 2.72.431.186.766.297 1.027.38.432.137.825.118 1.137.072.347-.051 1.066-.434 1.215-.854.15-.42.15-.78.105-.855-.045-.075-.165-.12-.345-.21z" />
        </svg>
        <div className="social-text">candyyy shop</div>
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=100087747575389&mibextid=LQQJ4d"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 social-icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-facebook"
          viewBox="0 0 16 16"
        >
          <path d="M8.665 6.933v-1.07c0-.484.326-.597.557-.597H10.1V3.007L8.542 3c-1.679 0-2.062 1.253-2.062 2.07v1.863H5.601v1.652h.879V13h1.7V8.585h1.421l.174-1.652H8.18z" />
        </svg>
        <div className="social-text">candyyy shop</div>
      </a>
    </div>
  
      </footer>
    </>
  );
}
