import {Link} from "react-router-dom";
import './cliente.css'
function cliente()
{
    return(
        <div class="cliente">
            <h1>Página do Cliente</h1><br/>
            <Link to='/' class="links">Home</Link>
            <Link to='/Conta' class="links">Conta</Link>
            <Link to ='/SobreNos' class="links">Sobre</Link>

            <br/><br/>
            <legend class='for'><strong>Formulário para o cadastro</strong></legend>
            <fieldset class='formulario'>
                <label>Nome: </label>
                <input type='text' placeholder="Digite seu nome" required/>
                <br/> <br/>

                <label>Email: </label>
                <input type='Email' placeholder="Digite seu E-mail" required/>
                <br/> <br/>
        
                <label>Idade: </label>
                <input type='number' placeholder="Digite sua idade" required/>
                <br/> <br/>

                <label>Sexo: </label>
                <input type='text'placeholder="Digite seu Sexo" required/>
                
                <br/> <br/>
                <button>Cadastrar</button>

            </fieldset>
        </div>
    );
}

export default cliente;