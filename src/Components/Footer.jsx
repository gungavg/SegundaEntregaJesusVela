import React from 'react'
import "../styles/footer.css";


const Footer = () => {
  return (
    <footer>
      {/* Fila superior con texto y línea roja */}
      <div className="footer-top">
        <p>Volver al inicio</p>
      </div>

      {/* Fila inferior con logo y iconos */}
      <div className="footer-bottom">
        <div className="footer-brand">
          <img src="/images/DH.png" alt="DH-logo" className="footer-logo" />
        </div>
        <div className="footer-icons">
          <img src="/images/ico-facebook.png" alt="Facebook" />
          <img src="/images/ico-instagram.png" alt="Instagram" />
          <img src="/images/ico-whatsapp.png" alt="WhatsApp" />
          <img src="/images/ico-tiktok.png" alt="TikTok" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
