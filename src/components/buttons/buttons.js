import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/styled.scss'


export default function Buttons() {

    return (
        <div>
            <div className="button">
                <Button className="button-email" type='button' >
                    Entrar
                </Button>
            </div>
            <div className="button">
                <Button className="button-cadaster" type='button'>
                    Cadastrar-se
                </Button>
            </div>
        </div>
    )
}