// Plants.jsx

import './Plants.css';
import { Link } from "react-router-dom";

function Plants(){
    return(
        <div className="row">
            <div className="col-md-12">
                <div className="card3 rounded-5 overflow-hidden card-large">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <img alt="varias macetas con pequeños cactus"
                                className="img-fluid img2"
                                src="./../../../public/PlantsImage.jpg"
                            />
                        </div>
                        <div className="col-md-6 align-self-end">
                            <div className="card-body pb-5 ml-n4">
                                <p className="card-title h3 pb-5 PlantTitle">Esquejes</p>
                                <Link to="/esquejes"><button type="button" className="btn btn-primary buttonPlants">Ver más</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plants;
