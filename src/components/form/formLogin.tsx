import { useState } from "react";
import logo from '../../imgs/logo.svg';
import '../../styles/style.css';
import Button from '../buttons/button';

export default function FormularioLogin(props: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //função que irá retornar algo
    const handleCadastro = (event: any) => {
        event.preventDefault();

        const info = {
            email,
            password
        }

        tratandoDados(info);
    }

    //função para criar, obter e remover dados do localStorage 

    function tratandoDados(userInfo: object) {
        const listaUsers: Array<UserProps> = JSON.parse(localStorage.getItem('listaUsers') || '[]');
        console.log({ userInfo, listaUsers });
        interface UserProps {
            nome: string,
            email: string;
            dataNascimento: string;
            id: number;
            password: string;
        }

        const infoTipada: {
            email: string;
            password: string;
        }
            = userInfo as {
                email: string;
                password: string;
            };

        let existe = listaUsers.filter(f => f.email == infoTipada.email && f.password == infoTipada.password);
        
        if(existe){
            console.log('User existe');
            alert('Bem-vindo!');
        }else{
            console.log('User não existe');
            alert('Não encontramos nenhum usuário');
        }
        
    }


    return (
        <div className="container-form">
            <form className='modal-bg' onSubmit={handleCadastro}>
                <div className='logo-cadastro'>
                    <img src={logo} alt="" />
                </div>
                <div className='inputs-login-form'>
                    <input
                        type="email"
                        id='inEmail'
                        placeholder='Email'
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                    <input
                        type="password"
                        id='inSenha'
                        placeholder='Senha'
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className='container-buttons'>
                    <Button className="button-login">
                        Login
                    </Button>
                </div>
            </form>
        </div>

    )
}