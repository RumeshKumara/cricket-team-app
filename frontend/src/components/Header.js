import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <svg className="logo-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="14" stroke="#ffeb3b" strokeWidth="3" fill="#121212" />
                        <rect x="10" y="10" width="12" height="12" rx="6" fill="#ffeb3b" />
                        <circle cx="16" cy="16" r="4" fill="#121212" />
                    </svg>
                    <span className="logo-text">infobash</span>
                </div>
                <button className="btn btn-primary " style={{ minWidth: 120, borderRadius: 24 }}>Get Started</button>
            </div>
        </header>
    );
};

export default Header;