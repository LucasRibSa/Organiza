import Forms from "./components/forms";
import Button from "./components/buttons";
import Modals from "./components/modals";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styled.scss'

export default function Investment() {
  return (
    <main>
      <Forms/>
      <Button/>
      <Modals/>
    </main>
  );
}
