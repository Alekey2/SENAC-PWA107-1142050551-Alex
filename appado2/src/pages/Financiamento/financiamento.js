import React, {useState} from 'react'
import './Financiamento.css'


function Financiamento()
{
    const [entradaNome, setNome] = useState('');
    const [entradaValor, setValor] = useState('');
    const [entradaParcelas, setParcelas] = useState('');

    const [dadosUsuarios, setDadosUsuarios] = useState(
        {valorSolicitadoDados:'0,00', valorParcelaDados:'0,00', jurosDados:'0,00'}
    );


    function calcularValor(dados){
        dados.preventDefault();
        var totalParcelas = Number(entradaParcelas);
        var solicitacao = Number(entradaValor);
        var total = 0;
        var valorJuros = 0;

        if(entradaParcelas === ''){
            totalParcelas = 0;
        } else {
            totalParcelas = Number(entradaParcelas);
        }

        if(entradaValor === ''){
            solicitacao = 0;
        } else {
            solicitacao = Number(entradaValor);
        }

        if(totalParcelas === 0){
            total = solicitacao;
        } else {
            if(solicitacao > 0 || totalParcelas >= 59)
            {
                valorJuros = 2.5 ;
                total = solicitacao * valorJuros /100 + solicitacao/totalParcelas;
            }
        }
        setDadosUsuarios(
            {valorSolicitadoDados:solicitacao, valorParcelaDados:total, jurosDados:valorJuros, nomes:entradaNome}
        );

        setNome('');
        setValor('');
        setParcelas('');
}
    return(
        <div class="Fini"><br/>
            <h1>Financiamento</h1><br/>
        
            <form onSubmit={(calcularValor)}>
            <fieldset>
            <legend class='for'><strong>Simulação de Financiamento: </strong></legend>

            <div class = 'in'>
                <label>Nome: </label>
                <input type='text' placeholder="Digite seu nome" value={entradaNome}onChange={(evento)=>setNome(evento.target.value)} required/>
                <br/> <br/>

                <label>Financiamento:</label>
                <input type='text' placeholder="Quanto quer Financiar ?" value={entradaValor}onChange={(evento)=>setValor(evento.target.value)} required/>
                <br/> <br/>

                <label>Parecelas:</label>
                <input type='text' placeholder="Quantidade de Parecelas ?" value={entradaParcelas}onChange={(evento)=>setParcelas(evento.target.value)} required/>
                <br/> <br/>
            
                <button type='submit'>Enviar</button>
            </div>
            </fieldset>
            <br/>


            <fieldset>  
            <legend class='for'><strong>Cálculo de Financiamento:</strong></legend>
            <span>Bem vindo Sr:{dadosUsuarios.nomes}</span>&nbsp;&nbsp;<br/>
            <span>Valor a ser Financiado: {dadosUsuarios.valorSolicitadoDados}</span><br/>
            <span>Valor das Parcelas:  {dadosUsuarios.valorParcelaDados}</span><br/>    

            <span>Taxa de Juros: 2,5%</span><br/>
            
                
                <br/> <br/><br/> <br/><br/> <br/>
                </fieldset>
            </form>
        </div>

        
    );
}

export default Financiamento;


