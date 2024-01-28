import { useState } from "react";
import logo from '../../imgs/logo.svg';
import '../../styles/style.css';
import { supabase } from '../../supabaseClient';

export default function FormularioLogin() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //const [password, setPassword] = useState('');

    const limparCampo = () => {
        setEmail('');
        //setPassword('');
    }

    const handleLogin = async (event: any) => {
        //tratandoDados(info);
        limparCampo();
        event.preventDefault()

        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
            alert(error.message)
        } else {
            alert('Check your email for the login link!')
        }
        setLoading(false)
    }


    return (
        <div className="container-form">
            <form className='modal-bg' onSubmit={handleLogin}>
                <div className='logo-cadastro'>
                    <img src={logo} alt="" />
                </div>
                <div className='inputs-login-form'>
                    <input
                        className="inputField"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='inputs-login-form'>
                    <input
                        className="inputField"
                        type="password"
                        placeholder="Your password"
                        value={password}
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className='container-buttons'>
                    <button className={'button-login'}  disabled={loading}>
                        {loading ? <span>Loading</span> : <span>Login</span>}
                    </button>
                </div>
            </form>
        </div>

    )

}