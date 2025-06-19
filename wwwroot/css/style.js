body {
  font-family: 'Greycliff CF', sans-serif;
  background: #FAFBFF;
  margin: 0;
  padding-bottom: 100px;
}

canvas {
  display: block;
  max-width: 100%;
  margin: 2rem auto;
}

.navbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #594ae2;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.4rem 0;
  z-index: 20;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: 0.65rem;
  color: #ffffff;
  flex: 1;
  height: 72px;
  padding-top: 6px;
}

.nav-item img {
  width: 28px;
  height: 28px;
  margin-bottom: 4px;
  object-fit: contain;
}

.nav-item-nuevo {
  transform: translateY(-10px);
}

.nav-item-nuevo .boton-registrar {
  background: #fff;
  padding: 8px;
  border-radius: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item-nuevo img {
  width: 36px;
  height: 36px;
  margin-bottom: 4px;
}

.footer-legales {
  position: fixed;
  bottom: 100px;
  width: 100%;
  text-align: center;
  font-size: 0.7rem;
  color: #94A3B8;
  background: #FAFBFF;
  z-index: 32;
}

.footer-legales a,
.footer-legales button {
  color: #94A3B8;
  margin: 0 4px;
  background: none;
  border: none;
  font-size: 10px;
  cursor: pointer;
}
