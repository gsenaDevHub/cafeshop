class OrnamentoSvg extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <svg viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 30 Q30 10 50 30 Q70 50 90 30" stroke="#c8924a" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <path d="M10 30 Q30 50 50 30 Q70 10 90 30" stroke="#5c3317" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.4"/>
            <circle cx="10" cy="30" r="3" fill="#c8924a"/>
            <circle cx="50" cy="30" r="2" fill="#5c3317"/>
            <circle cx="90" cy="30" r="3" fill="#c8924a"/>
            <rect x="193" y="22" width="14" height="14" fill="#c8924a" transform="rotate(45 200 29)"/>
            <rect x="196" y="25" width="8" height="8" fill="#fdf6ec" transform="rotate(45 200 29)"/>
            <path d="M390 30 Q370 10 350 30 Q330 50 310 30" stroke="#c8924a" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <path d="M390 30 Q370 50 350 30 Q330 10 310 30" stroke="#5c3317" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.4"/>
            <circle cx="390" cy="30" r="3" fill="#c8924a"/>
            <circle cx="350" cy="30" r="2" fill="#5c3317"/>
            <circle cx="310" cy="30" r="3" fill="#c8924a"/>
            <line x1="90" y1="30" x2="186" y2="30" stroke="#c8924a" stroke-width="1" opacity="0.6"/>
            <line x1="214" y1="30" x2="310" y2="30" stroke="#c8924a" stroke-width="1" opacity="0.6"/>
        </svg>
        `;
    }
}

customElements.define("ornamento-svg", OrnamentoSvg);
