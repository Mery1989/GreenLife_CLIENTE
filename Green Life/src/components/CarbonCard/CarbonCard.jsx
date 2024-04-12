import './CarbonCard.css';

function CarbonCard(){
    return(
        <div>
            <p class="carbonPrincipalSubtitle">Descubre el impacto ambiental de tu estilo de vida</p>
            <h1 class="carbonPrincipalTitle dm-serif">¿Cómo Funciona Nuestro Medidor?</h1>
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
            <div class="carbonCard">
                <div>
                    <img class="carbonImage carbonImageSource3" src="./../../../public/CarbonCard3.png"></img>
                </div>
                <div>
                    <p class="carbonNumberRight dm-serif">03</p>
                    <div class="carbonText">
                        <p class="carbonTitle dm-serif">Calcula Tu Huella</p>
                        <p>Proceso automático que analiza las respuestas y genera la huella de carbono.</p>
                    </div>
                </div>
            </div>
            <div class="carbonCard flexReverse">
                <div>
                    <p class="carbonNumberLeft dm-serif">04</p>
                    <div class="carbonText">
                        <p class="carbonTitle dm-serif">Recomendaciones Personalizadas</p>
                        <p>Consejos prácticos para reducir la huella de carbono basados en los resultados</p>
                    </div>
                </div>
                <div>
                    <img class="carbonImage carbonImageSource4" src="./../../../public/CarbonCard4.png"></img>
                </div>
            </div>
            <div class="startTest">
                <p class="dm-serif">¡Empieza hoy y sé parte del cambio!</p>
                <button>EMPEZAR TEST</button>
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