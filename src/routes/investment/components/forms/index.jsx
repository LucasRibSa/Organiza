import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Forms() {
    return (
        <div>
            <Form>
            <div className="frame1">
          <div className="title">
            <div className="organiza">organiza</div>
            <b className="investimento1">Investimento</b>
          </div>
          <div className="desejaAdicionarAlgumaInvestParent">
            <b className="organiza">
              Deseja adicionar alguma investimento ?
            </b>
          </div>
        </div>
            </Form>
        </div>
    );
}
