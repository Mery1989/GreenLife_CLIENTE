import { useState } from "react";
import "./CalculatorForm.css";
import { Form, Button } from "react-bootstrap";
import huellaService from "../../services/HuellaService";

const CalculatorForm = ({closeModal, refreshHuella})=> {
  const [huellaData, setHuellaData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
  });


  
    const handleChange = (e) => {
        const {value, name } = e.target;
        setHuellaData({
            ...huellaData,
            [name]:value,
        });
    };

    
    const handleSubmit = (e) =>{
        e.preventdefault()
        huellaService
        .saveHuella (huellaData)
        .then (({data}) => {closeModal(),
        refreshHuella()})
        .catch((err) => console.log(err))
        
    };

    
    const sum = (a, b) => {
        console.log("suma");
        return a + b;
      };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <div>
            <Form.Group>
              <Form.Label className="formPregunta">
                1. ¿Con qué frecuencia utilizas el transporte público?
              </Form.Label>
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question1"
                value="a"
                label="A. Todos los días"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question1"
                value="b"
                label="B. Algunas veces"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question1"
                value="c"
                label="C. Nunca"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formPregunta">
                2. ¿Cuántos kilómetros recorres en tu automóvil cada semana?
              </Form.Label>
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question2"
                value="a"
                label="A. Menos de 50 km"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question2"
                value="b"
                label="B. Entre 50 y 200 km"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question2"
                value="c"
                label="C. Más de 200 km"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formPregunta">
                3. ¿Cuánta carne consumes a la semana?
              </Form.Label>
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question3"
                value="a"
                label="A. Más de 7 porciones"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question3"
                value="b"
                label="B. Entre 3 y 7 porciones"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question3"
                value="c"
                label="C. Menos de 3 porciones"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formPregunta">
                4. ¿Cuánto desperdicio de alimentos generas?
              </Form.Label>
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question4"
                value="a"
                label="A. Mucho"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question4"
                value="b"
                label="B. Algo"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question4"
                value="c"
                label="C. Poco"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formPregunta">
                5. ¿Con qué frecuencia consumes productos de origen local?
              </Form.Label>
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question5"
                value="a"
                label="A. Siempre"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question5"
                value="b"
                label="B. A veces"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question5"
                value="c"
                label="C. Nunca"
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label className="formPregunta">
                6. ¿Cuánto tiempo pasas en la ducha cada día?
              </Form.Label>
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question6"
                value="a"
                label="A. Más de 10 minutos"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question6"
                value="b"
                label="B. Entre 5 y 10 minutos"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question6"
                value="c"
                label="C. Menos de 5 minutos"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formPregunta">
                7. ¿Cuántas veces a la semana comes alimentos procesados?
              </Form.Label>
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question7"
                value="a"
                label="A. Todos los días"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question7"
                value="b"
                label="B. Varias veces"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question7"
                value="c"
                label="C. Raramente o nunca"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formPregunta">
                8. ¿Cuánta electricidad consumes en casa al mes?
              </Form.Label>
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question8"
                value="a"
                label="A. Alta"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question8"
                value="b"
                label="B. Media"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question8"
                value="c"
                label="C. Baja"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formPregunta">
                9. ¿Cuántos viajes en avión realizas al año?
              </Form.Label>
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question9"
                value="a"
                label="A. Más de 5"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question9"
                value="b"
                label="B. Entre 1 y 5"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question9"
                value="c"
                label="C. Ninguno o muy pocos"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formPregunta">
                10. ¿Cuántas veces al mes compras productos empaquetados
                individualmente?
              </Form.Label>
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question10"
                value="a"
                label="A. Más de 10 veces"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question10"
                value="b"
                label="B. Entre 5 y 10 veces"
                onChange={handleChange}
              />
              <Form.Check
                className="formRespuesta"
                type="radio"
                name="question10"
                value="c"
                label="C. Menos de 5 veces"
                onChange={handleChange}
              />
            </Form.Group>
          </div>
        </div>
        <center>
          <Button className="DetailButton" type="submit">
            Calcular Huella de Carbono
          </Button>
        </center>
      </Form>
      </div>
    
  );
}

export default CalculatorForm;
