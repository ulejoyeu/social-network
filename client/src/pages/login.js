import { useState } from 'react';
import { useSession } from '../context/user-context';

const LoginPage = () => {
    const { login } = useSession();
    
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const onUsernameChange = event => setUsername(event.target.value);
    const onPasswordChange = event => setPassword(event.target.value);
    
    const connexion = (event) => {
        event.preventDefault();
        login(username, password);
    }

    return (
        <div className="flex w-full h-full bg-slate-100">
            <div className="flex w-1/2 items-center justify-center">
                <h1 className="text-6xl text-center bg-slate-800 hover:bg-slate-700 p-8 rounded-lg text-white">
                    <div className="p-4">MON</div>
                    <div className="p-4">RESEAU</div>
                    <div className="p-4">SOCIAL</div>
                </h1>
            </div>

            <form className="flex flex-col w-1/2 items-center justify-center">
                <h1 className="text-5xl m-10 hover:text-slate-500">CONNEXION</h1>
                
                <input type="text" value={username} onChange={onUsernameChange} placeholder="Username" className="w-2/3 p-4 m-4 rounded-full hover:bg-slate-200" />
                <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" className="w-2/3 p-4 m-4 rounded-full hover:bg-slate-200" />

                <button onClick={connexion} className="w-1/3 p-4 m-4 bg-green-500 rounded-full text-white hover:bg-green-600" >LOGIN</button>
            </form>
        </div>
    );
}

export default LoginPage;