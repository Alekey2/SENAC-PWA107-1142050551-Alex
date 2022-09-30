import {Link} from "react-router-dom";
import './conta.css'
function conta()
{
    return(
        <div class='conta'>
            <h1>Página da Conta</h1><br/>
            <Link to='/' class="links">Home</Link>
            <Link to='/Cliente' class="links">Cliente</Link>
            <Link to ='/SobreNos' class="links">Sobre</Link>
        </div>

        
    );
}

export default conta;


