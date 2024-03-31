import { render} from "@testing-library/react"

import ModalEvent from "./../src/components/ModalEvent/ModalEvent"

describe ("Mostrar Modal de evento", () =>{

    it.skip("debe mostra la ventana modal", () =>{

        const sut = render(<ModalEvent/>)
        const  titleElement = sut.getByText("Crea un evento")

        expect {titleElement}.toBeInTheDocument();

    })
});