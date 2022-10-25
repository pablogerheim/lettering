import '../css/helper.css';
import { useState } from 'react';

function UpdateDialog({ 
    setClose,
    utm_source
 }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');


    ! function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '896121291775054');

    const handleSubmit = async () => {
        fbq('track', 'Lead');
        window.location.href = `https://go.hotmart.com/C70041567X?ap=30cc&email=${email}&name=${name}&phonenumber=${numero}&${utm_source}`; 
    }

    return (
        <div className="dialogStyles">
            <div className=" dialogHead">
                <button
                    onClick={() => setClose(true)}
                    className='dialogCloseButtonStyles'
                >
                    X
                </button>
                <h3 className='dialogTitle'>CRIE SEU ACESSO AGORA </h3>
                <p className='dialogText'>Digite os dados que você usará para acessar o Curso Lettering na Prática.</p>
            </div>
            <div className='dialog'>
                <label className="dialogLabel">
                    Digite seu Nome
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="dialogLabel">
                    Digite seu e-mail
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="dialogLabel">
                    Digite seu WhatsApp com DDD
                    <input
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />

                </label>
                <button
                    className='dialogButtonSub'
                    onClick={handleSubmit}
                >
                    Continuar inscrição {'>>'}
                </button>
            </div>
        </div>
    );
}
export { UpdateDialog };