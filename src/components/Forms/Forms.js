import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/styled.scss'


export default function Forms() {
    return (
        <div>
            <Form>
                <div className='login'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control className='email' type="email" placeholder="example@email.com"/>           
                </Form.Group>
                </div>
                <div className='senha'>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Sua senha</Form.Label>
                    <Form.Control className='password' type="password" placeholder="**********"/>
                </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='check' type="checkbox" label="Lembrar minhas informações" />
                    <button type="button" class="btn btn-link">
                        Esqueci minha senha 
                    </button>
                </Form.Group>
            </Form>
        </div>
    );
}