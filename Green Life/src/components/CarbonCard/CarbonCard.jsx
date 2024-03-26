import './CarbonCard.css';

function CarbonCard(){
    return(
        <div>
            <div class="carbonCard">
                <div>
                    <img class="carbonImage carbonImageSource1" src="./../../../public/CarbonCard1.png"></img>
                </div>
                <div>
                    <p class="carbonNumberRight dm-serif">01</p>
                    <div class="carbonText">
                        <p class="carbonTitle dm-serif">Registro</p>
                        <p>Formulario de registro fácil y rápido para obtener acceso al medidor.</p>
                    </div>
                </div>
            </div>
            <div class="carbonCard flexReverse">
                <div>
                    <p class="carbonNumberLeft dm-serif">02</p>
                    <div class="carbonText">
                        <p class="carbonTitle dm-serif">Responde preguntas</p>
                        <p>Serie de preguntas interactivas sobre hábitos diarios, consumo y estilo de vida</p>
                    </div>
                </div>
                <div>
                    <img class="carbonImage carbonImageSource2" src="./../../../public/CarbonCard2.png"></img>
                </div>
            </div>
        </div>
    //  <div className="card rounded-5 overflow-hidden card-large"  >
    //   <div className="row">
    //     <div className="col-md-6 col-xs-12">
    //     <img alt="varias macetas con pequeños cactus"
    //         className="img-fluid img2"
    //         src="./../../../public/PlantsImage.jpg"
            

    //       />
    //     </div>
    //     <div className="col-md-6 align-self-end">
    //       <div className="card-body pb-5 ml-n4">
    //         <p className="card-title h3 pb-5 PlantTitle">Esquejes</p>
    //         <button type="button" className="btn btn-primary">Ver más</button>
    //       </div>
    //     </div>
    //   </div>

        
    // </div>
    );
}
export default CarbonCard;