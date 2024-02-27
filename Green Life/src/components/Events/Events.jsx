import './Events.css';

function Events(){
    return(
     <div class="card rounded-5 overflow-hidden"  >
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <img
            class="img-fluid"
            src="./../../../public/EventsImage.jpg"
            

          />
        </div>
        <div class="col-md-6 align-self-end">
          <div class="card-body pb-5 ml-n4">
            <p class="card-title h3 pb-5">Eventos</p>
            <button type="button" class="btn btn-primary">Ver más</button>
          </div>
        </div>
      </div>

        
    </div>
    );
}
export default Events;