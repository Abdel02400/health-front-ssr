import type { ReactElement } from 'react';

function LogoIcon(): ReactElement {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 64">
            <defs>
                <linearGradient id="health-gradient">
                    <stop offset="0%" stopColor="#7C3AED"/>
                    <stop offset="50%" stopColor="#EC4899"/>
                    <stop offset="100%" stopColor="#F97316"/>
                </linearGradient>
            </defs>
            <g>
                <path d="M32 58 C32 58 4 40 4 22 C4 12 12 6 20 6 C26 6 30 10 32 14 C34 10 38 6 44 6 C52 6 60 12 60 22 C60 40 32 58 32 58Z" fill="url(#health-gradient)" />
                <path d="M18 32 H26 L29 26 L32 38 L36 24 L39 32 H46" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
            <text x="80" y="32" dominantBaseline="middle" fill="url(#health-gradient)" fontSize="32" fontFamily="Inter, Arial, sans-serif" fontWeight="700">Health</text>
        </svg>
    );
}

export default LogoIcon;