import React, {useState} from 'react'
import './Movimentacao.css'
function Movimentacao()
{
    const [nomex, setNome] = useState("")
    const [cpfa, setCpf] = useState ("")
    const [saquex, setSaque] = useState("")
    const [depositox, setDeposito]= useState("")

    const [dadosUsuario,setDadosUsuario]= useState({saldoDados:"0", nomeDados:"Privado"});


    
    function Registro(evento)
    {
        evento.preventDefault();

        let saldo = 0;
        let deposito = 0;
        let saque = 0;


        if(depositox === ''){
            deposito = 0;
        } else{
            deposito = parseInt(depositox);
        }

        if(saquex === ''){
            saque = 0;
        } else {
            saque = parseInt(saquex);
        }
        
        saldo = deposito + (saque * -1);

        setDadosUsuario(
            {saldoDados:saldo, nomeDados:nomex}
        );

    }
    
    
    return(
        <div class="Mov"><br/>
            <h1>Movimentação de Conta</h1><br/>
        
            <form onSubmit={(Registro)}>
            <fieldset class='formulario'>
            <legend class='for'><strong>Opções de Movimentação: </strong></legend>

            <div class = 'in'>
                <label>Nome: </label>
                <input type='text' placeholder="Digite seu nome" value={nomex}onChange={(evento)=>setNome(evento.target.value)} required/>
                <br/> <br/>

                <label>CPF: </label>
                <input type='text' placeholder="Digite seu CPF" value={cpfa}onChange={(evento)=>setCpf(evento.target.value)} required/>
                <br/> <br/>

                <label>Deposito: </label>
                <input type='text' placeholder="Digite quanto quer Depositar" value={depositox}onChange={(evento)=>setDeposito(evento.target.value)} required/>
                <br/> <br/>

                <label>Saque: </label>
                <input type='text' placeholder="Digite quanto quer Sacar" value={saquex} onChange={(evento)=>setSaque(evento.target.value)} required/>
                <br/> <br/>
                <button type='submit'>Enviar</button>
            </div>
            </fieldset>
            <br/>


            <fieldset>  
            <legend class='for'><strong>Resultado da Operação:</strong></legend>
            <span>Bem vindo Sr: {dadosUsuario.nomeDados}</span>&nbsp;&nbsp;<br/>
            <span>Seu Saldo é de:{dadosUsuario.saldoDados}</span><br/>
            
                
                <br/> <br/><br/> <br/><br/> <br/>
                </fieldset>
            </form>
        </div>
    )
}
export default Movimentacao;