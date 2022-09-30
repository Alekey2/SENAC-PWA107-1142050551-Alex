import React, {useState} from 'react';
import './Cadastro.css'
function Cadastro()
{
    const [cpfa, setCpf] = useState ("")
    const [idadex, setIdade] = useState("")
    const [nomex, setNome] = useState("")
    const [emailx, setEmail] = useState("")
    const [dadosUsuario,setDadosUsuario]= useState({nome :"",cpfa:"",idadex:"",emailx:""});


    function RegistrarNome(evento){
        evento.preventDefault();
        setDadosUsuario({nomes : nomex, Emails : emailx, Cpfs : cpfa, Idades : idadex})

      }

    return(
        <div class="cad"><br/>
            <h1>Página de Cadastro</h1><br/>
        
            <form onSubmit={(RegistrarNome)}>
            <fieldset class='formulario'>
            <legend class='for'><strong>Formulário para o cadastro: </strong></legend>
            <div class = 'in'>
                <label>Nome: </label>
                <input type='text' placeholder="Digite seu nome" value={nomex}onChange={(evento)=>setNome(evento.target.value)} required/>
                <br/> <br/>

                <label>Email: </label>
                <input type='Email' placeholder="Digite seu E-mail" value={emailx}onChange={(evento)=>setEmail(evento.target.value)} required/>
                <br/> <br/>

                <label>CPF: </label>
                <input type='text' placeholder="Digite seu CPF" value={cpfa}onChange={(evento)=>setCpf(evento.target.value)} required/>
                <br/> <br/>

                <label>Idade: </label>
                <input type='number' placeholder="Digite sua idade"value={idadex}onChange={(evento)=>setIdade(evento.target.value)} required/>
                <br/> <br/>

                <button type='submit'>Cadastrar</button>
            </div>
            </fieldset>
            <br/>
            <fieldset>  
            <legend class='for'><strong>Resultado do Formulário:</strong></legend>
            <span>Bem vindo Sr:<br/> {dadosUsuario.nomes}</span><br/>
            <span>Seu e-mail:<br/> {dadosUsuario.Emails}</span><br/>
            <span>Seu CPF:<br/> {dadosUsuario.Cpfs}</span><br/>
            <span>Sua idade:<br/> {dadosUsuario.Idades}</span>
                
                <br/> <br/><br/> <br/><br/> <br/>
                </fieldset>
            </form>
        </div>
    );
}

export default Cadastro;