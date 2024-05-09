import React from 'react';
import './footer.css';

const Footer = () => {
    return (
    <footer className="footer">
      <div className="footer-content">
        <div className="floreria-info">
          <h3>Florería Luju</h3>
          <br/>
          <p>Dirección: Calle Principal #123</p>
          <p>Teléfono: 555-1234-5678</p>
          <p>Email: info@florerialuju.com</p>
        </div>
        
        <div className="propietarios-info">
          <h3>Propietarios</h3>
          <br/>
          <p>Nombre: Juan Charris</p>
          <p>Nombre: Luna Beltrán</p>
          <p>Teléfono: 555-8765-4321</p>
        </div>
      </div>
    </footer>
  );
}

export {Footer};
