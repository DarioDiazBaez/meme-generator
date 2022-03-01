import React, { useState } from "react";
import html2canvas from 'html2canvas';

const imagenes = require.context('./img',true)

function App() {

  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('fire');

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value)
  }

  const onClickExportar = function (evento) {

    html2canvas(document.querySelector("#meme"))
    .then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App text-center bg-success py-3 py-5 px-5">
    <div className="d-flex justify-content-center row">
      <div className="col-12 col-md-6">
        <select className="form-select my-3" aria-label="Default select example"onChange={onChangeImagen}>
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="linea 1" onChange={onChangeLinea1} aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="linea 2" onChange={onChangeLinea2} aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>

        <button type="button" className="btn btn-primary"onClick={onClickExportar}>Exportar</button>

      </div>
      <div className="meme col-12 col-md-6" id="meme" >
        <div className="card bg-dark text-white">
          <img src={imagenes(`./${imagen}.jpg`)} className="card-img img-fluid" alt="meme"/>
          <div className="card-img-overlay">
            <br/><br/>
            <h2 className="fs-1 text-light card-text">{linea1}</h2>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
            <h2 className="fs-1 text-light card-text">{linea2}</h2>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
