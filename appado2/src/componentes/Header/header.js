import {Link} from "react-router-dom"
import './head.css'
function header(){
    return(
        <header>
             <h1 class="tcabe">NoBank</h1>
            <div>
                <Link to='/' class="cabe">Home</Link>&nbsp; &nbsp; &nbsp; 
                <Link to='/Cadastro' class="cabe">Cadastro</Link>&nbsp; &nbsp; &nbsp;
                <Link to='/Movimentacao' class="cabe">Movimentação da Conta</Link>&nbsp; &nbsp; &nbsp;
                <Link to='/Financiamento' class="cabe">Financiamento</Link>&nbsp; &nbsp; &nbsp; 
                <Link to ='/SobreNos' class="cabe">Sobre</Link>&nbsp; &nbsp; &nbsp; &nbsp;
                
            </div>
        </header>   
    );
}
export default header;
