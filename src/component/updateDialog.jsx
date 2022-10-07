import '../css/helper.css';
import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/Bi';

function UpdateDialog({ setClose }) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [access, setAccess] = useState('');

    useEffect(() => {
        startUpdate()
    }, [])

    const startUpdate = async () => {

    }

    const update = async () => {

    }

    return (
        <div className="dialogStyles">
            <div className=" dialogHead">
                <button
                    onClick={() => setClose(true)}
                    className='dialogCloseButtonStyles'
                >
                    <BiArrowBack />
                </button>
                <h3 className='dialogTitle'>CRIE SEU ACESSO AGORA</h3>
                <p className='dialogText'>Digite os dados que você usará para acessar o Curso Lettering na Prática.</p>

            </div>
            
            <div className='dialog'>
                <label className="dialogLabel">
                    Digite seu Nome
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className=""
                    />
                </label>

                <label className="dialogLabel">
                    Digite seu e-mail
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=""
                    />
                </label>
                <label className="dialogLabel">
                    Digite seu WhatsApp com DDD

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=""
                    />
   
                </label>
                <button
                    className='dialogButtonSub'
                    onClick={update}
                >
                    Continuar inscrição {'>>'}
                </button>
            </div>
        </div>
    );
}
export { UpdateDialog };