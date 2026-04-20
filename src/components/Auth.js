import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, UserPlus, LogIn, Lock, User } from 'lucide-react';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, register } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (!username || !password) {
            setError('System requires all credentials.');
            return;
        }

        if (isLogin) {
            if (!login(username, password)) {
                setError('Invalid Identity Credentials.');
            }
        } else {
            if (!register(username, password)) {
                setError('Identity already registered.');
            }
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            overflow: 'hidden'
        }}>
            {/* Background scanner lines already coming from index.css body::before */}
            
            <div className="card animate-pop" style={{ maxWidth: '400px', width: '90%', padding: '2.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ 
                        margin: '0 auto 1.5rem',
                        width: '70px', height: '70px', 
                        borderRadius: '50%', 
                        border: '2px solid var(--accent-color)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: 'var(--accent-glow)',
                        backgroundColor: 'rgba(0, 229, 255, 0.05)'
                    }}>
                        <ShieldCheck size={36} color="var(--accent-color)" />
                    </div>
                    <h2 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 900, letterSpacing: '3px' }}>
                        {isLogin ? 'SYSTEM ACCESS' : 'NEW REGISTRATION'}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {isLogin ? 'Enter Leveling Identity' : 'Initialize New System Profile'}
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    {error && (
                        <div style={{ 
                            backgroundColor: 'rgba(255, 51, 102, 0.1)', 
                            borderLeft: '4px solid var(--danger-color)',
                            padding: '0.75rem', 
                            marginBottom: '1.5rem',
                            color: 'var(--danger-color)',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase'
                        }}>
                            {error}
                        </div>
                    )}

                    <div style={{ marginBottom: '1.25rem' }}>
                        <label style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 'bold' }}>Player Username</label>
                        <div style={{ position: 'relative' }}>
                            <User size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-color)', opacity: 0.6 }} />
                            <input 
                                type="text" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{ paddingLeft: '2.8rem', marginBottom: 0 }}
                                placeholder="JINWOO_SUNG"
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 'bold' }}>Security Key</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-color)', opacity: 0.6 }} />
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ paddingLeft: '2.8rem', marginBottom: 0 }}
                                placeholder="********"
                            />
                        </div>
                    </div>

                    <button type="submit" style={{ width: '100%', padding: '1rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                            {isLogin ? <LogIn size={18} /> : <UserPlus size={18} />}
                            {isLogin ? 'CONNECT TO SYSTEM' : 'INITIALIZE PROFILE'}
                        </div>
                    </button>

                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                            {isLogin ? "No active profile?" : "Already registered?"}
                            <button 
                                type="button"
                                onClick={() => setIsLogin(!isLogin)}
                                style={{ 
                                    background: 'none', 
                                    border: 'none', 
                                    color: 'var(--accent-color)', 
                                    padding: '0 0.5rem',
                                    fontWeight: 'bold',
                                    boxShadow: 'none'
                                }}
                            >
                                {isLogin ? 'Register Identity' : 'Login Identity'}
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
