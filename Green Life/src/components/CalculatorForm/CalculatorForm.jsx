import { useState } from "react";
import "./CalculatorForm.css";
import { Form, Button } from "react-bootstrap";
import huellaService from "../../services/HuellaService";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend)


const CalculatorForm = ({ closeModal }) => {
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

  const [categoriaValores, setCategoriaValores] = useState({
    transporte: 0,
    alimentos: 0,
    energia: 0,
  });

  const [porcentajeHuella, setPorcentajeHuella] = useState(null);
  const [showGraph, setShowGraph] = useState(false); // Estado para controlar la visibilidad del gráfico

  const handleChange = (e) => {
    const { value, name } = e.target;
    setHuellaData({
      ...huellaData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    huellaService
      .saveHuella(huellaData)
      .then(({ data }) => {
        calcularPorcentajeHuella();
        setShowGraph(true); // Mostrar el gráfico después de calcular la huella de carbono
        console.log("Porcentaje de huella calculado: handlesumit", porcentajeHuella); // Verificar el porcentaje de huella calculado
        console.log("Datos de categoría calculados:handlesumit", categoriaValores); 
      })
      .catch((err) => console.log(err));
  };


  const calcularPorcentajeHuella = () => {
    const puntuacionPerfecta = 100; // Cambiar según la puntuación máxima posible
    let puntuacionTotal = 0;

    // Asignar puntos según las respuestas
    for (const pregunta in huellaData) {
      const respuesta = huellaData[pregunta];
      switch (respuesta) {
        case "a":
          puntuacionTotal -= 1;
          break;
        case "b":
          // No hacer nada para respuestas neutras
          break;
        case "c":
          puntuacionTotal += 1;
          break;
        default:
          break;
      }
    }

    // Calcular porcentaje
    const porcentaje = (puntuacionTotal / puntuacionPerfecta) * 100;
    setPorcentajeHuella(porcentaje);

    // Calcular valores de cada categoría
    const totalRespuestas = Object.keys(huellaData).length;
    const categorias = {
      transporte: ["question1", "question2", "question9"],
      alimentos: ["question3", "question4", "question5", "question10"],
      energia: ["question6", "question7", "question8"],
    };

    const valoresPorCategoria = {};
    Object.keys(categorias).forEach((categoria) => {
      let valorCategoria = 0;
      categorias[categoria].forEach((pregunta) => {
        if (huellaData[pregunta] === "a") {
          valorCategoria -= 1;
        } else if (huellaData[pregunta] === "c") {
          valorCategoria += 1;
        }
      });
      valoresPorCategoria[categoria] = (valorCategoria / totalRespuestas) * 100;
    });
    setCategoriaValores(valoresPorCategoria);

    console.log("Porcentaje de huella calculado: calcularPorcentajeHuella", porcentaje); // Verificar el porcentaje calculado
    console.log("Datos de categoría calculados: calcularPorcentajeHuella" , valoresPorCategoria); // Verificar los datos de categoría calculados

  };

  // Configuración de datos para el gráfico
  const data = {
    labels: Object.keys(categoriaValores),
    datasets: [
      {
        data: Object.values(categoriaValores),
        backgroundColor: [
          "rgba(27, 81, 45, 0.6)", // Rojo
          "rgba(28, 124, 84, 0.6)", // Azul
          "rgba(115, 226, 167, 0.6)", // Amarillo
        ],
        borderColor: [
          "rgba(224, 245, 233, 1)",
          "rgba(122, 225, 182, 1)",
          "rgba(42, 203, 117, 1)",
        ],
        borderWidth: 1,
      },
    ],
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
        <Button className="DetailButton" type="submit" onClick={(e) => handleSubmit(e)}>
            Calcular Huella de Carbono
          </Button>
        </center>
      </Form>
      <div className="Box">{showGraph && porcentajeHuella && (
      <div style={{ marginTop: "20px" }}>
        <Pie data={data} />
      </div>
      )}</div>
      
      </div>
    
  );
}

export default CalculatorForm;
