import './Events.css';

import { Link } from "react-router-dom";

function Events(){
    return(
     <div className="card1 rounded-5 overflow-hidden card card-large "  >
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <img
            className="img-fluid imgEvents" alt="botella de plástico aplatada  con fondo amarillo"
            src="./../../../public/EventsImage.jpg"
            

          />
        </div>
        <div className="col-md-6 align-self-end">
          <div className="card-body pb-5 ml-n4">
            <p className="card-title h3 pb-5 EventTitle">Eventos</p>
            <Link to="/eventos" ><button type="button" className="btn btn-primary buttonEvents"> Ver más</button></Link>
          </div>
        </div>
      </div>

        
    </div>
    );
}
export default Events;