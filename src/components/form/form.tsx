import { useState } from "react";
import logo from '../../imgs/logo.svg';
import '../../styles/style.css';
import Button from '../buttons/button';
import { Link } from 'react-router-dom';



interface UserProps{
    nome: string,
    email:string;
    dataNascimento:string;
    id: number;
    password: string;
}

export default function Formulario() {
    //Definindo Estado

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [password, setPassword] = useState('');

    //função que irá retornar algo
    const handleCadastro = async (event: any) => {
        event.preventDefault();
        tratandoDados();

    }

    const limparCampo = () => {
        setName('');
        setEmail('');
        setDataNascimento('');
        setPassword('');
    }

    //função para criar, obter e remover dados do localStorage 
    function tratandoDados() {
        
        let listaUsers: UserProps[] = JSON.parse(localStorage.getItem('listaUsers') || '[]');

        //const idList: Array<number> = listaUsers.map(user => user.id);
      
        let id: number = listaUsers.length == 0 ? 1 : listaUsers[listaUsers.length - 1].id+1;
        
        

        const userProps:UserProps = {
            nome: name.toLocaleLowerCase().trimEnd().trimStart(),
            email: email.toLocaleLowerCase().trimEnd().trimStart(),
            dataNascimento: dataNascimento,
            password: password.toLocaleLowerCase(),
            id: id
        }

        listaUsers.push({
            nome: name.toLocaleLowerCase().trimEnd().trimStart(),
            email: email.toLocaleLowerCase().trimEnd().trimStart(),
            dataNascimento: dataNascimento,
            password: password.toLocaleLowerCase(),
            id: id
        })

        localStorage.setItem('listaUsers', JSON.stringify(listaUsers));
        alert('Sua conta foi criada com sucesso!');
        limparCampo();
    }


    return (
        <div className="container-form">
            <form className='modal-bg' onSubmit={handleCadastro}>
                <div className='logo-cadastro'>
                    <img src={logo} alt="" />
                </div>
                <div className='inputs-login-form'>
                    <input
                        type="text"
                        id='inNome'
                        placeholder='Nome'
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                    <input
                        type="email"
                        id='inEmail'
                        placeholder='Email'
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                    <input
                        type="date"
                        id='inDataNasc'
                        placeholder='Data de Nascimento'
                        required
                        value={dataNascimento}
                        onChange={(event) => setDataNascimento(event.target.value)} />
                    <input
                        type="password"
                        id='inSenha'
                        placeholder='Senha'
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className='container-buttons'>
                    <Button className='button-cadastrar'>
                        Cadastrar
                    </Button>
                    <p><Link to='/login'>Login</Link></p>
                </div>
            </form>
        </div>

    )
    }