import './Plants.css';

function Plants(){
    return(
     <div className="card rounded-5 overflow-hidden card-large"  >
      <div className="row">
        <div className="col-md-6 col-xs-12">
        <img
            className="img-fluid img2"
            src="./../../../public/PlantsImage.jpg"
            

          />
        </div>
        <div className="col-md-6 align-self-end">
          <div className="card-body pb-5 ml-n4">
            <p className="card-title h3 pb-5 PlantTitle">Esquejes</p>
            <button type="button" className="btn btn-primary">Ver más</button>
          </div>
        </div>
      </div>

        
    </div>
    );
}
export default Plants;