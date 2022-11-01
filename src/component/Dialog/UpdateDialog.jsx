import './UpdateDialog.css';
import { useState } from 'react';
import { api } from "../../data/api";

function UpdateDialog({
    setOpen,
    current_path
}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');

    const handleSubmit = async () => {
        event.preventDefault()
        dataLayer.push({event: 'leadCapture'})
        await api(email, name, numero)
        window.location.href = `https://go.hotmart.com/C70041567X?ap=30cc&email=${email}&name=${name}&phonenumber=${numero}&src=${current_path}`;
    }

    return (
        <div className="dialogStyles">
            <div className=" dialogHead">
                <button
                    onClick={() => setOpen(false)}
                    className='dialogCloseButtonStyles'
                >
                    X
                </button>
                <h3 className='dialogTitle'>CRIE SEU ACESSO AGORA </h3>
                <p className='dialogText'>Digite os dados que você usará para acessar o Curso Lettering na Prática.</p>
            </div>
            <form className='dialog'>
                <label className="dialogLabel">
                    Digite seu Nome
                    <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="dialogLabel">
                    Digite seu e-mail
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="dialogLabel">
                    Digite seu WhatsApp com DDD
                    <input
                        required
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </label>
                <button
                    type='submit'
                    className='dialogButtonSub'
                    onClick={handleSubmit}
                >
                    Continuar inscrição {'>>'}
                </button>
            </form>
        </div>
    );
}
export default UpdateDialog 