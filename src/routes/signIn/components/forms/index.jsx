import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Forms() {
    return (
        <div>
            <div className='logo'>
                <img src='logo_transparent.png' className='logoorganiza' alt='foto da logo'></img>
            </div>
            <Form>
                <div className='login'>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control className='email' type="email" placeholder="example@email.com"/>           
                </Form.Group>
                </div>
                <div className='senha'>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Sua senha</Form.Label>
                    <Form.Control className='password' type="password" placeholder="**********"/>
                </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='check' type="checkbox" label="Lembrar minhas informações"/>
                </Form.Group>
            </Form>
        </div>
    );
}