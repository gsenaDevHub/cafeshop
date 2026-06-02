
class CoffeeSvg extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Steam wisps -->
            <path d="M40 22 Q38 14 42 8 Q46 2 44 -4" stroke="#5c3317" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6"/>
            <path d="M55 18 Q53 10 57 4 Q61 -2 59 -8" stroke="#5c3317" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6"/>
            <path d="M70 22 Q68 14 72 8 Q76 2 74 -4" stroke="#5c3317" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6"/>
            <!-- Saucer -->
            <ellipse cx="57" cy="95" rx="38" ry="9" fill="#c8924a" stroke="#5c3317" stroke-width="1.5"/>
            <ellipse cx="57" cy="92" rx="28" ry="5" fill="#fdf6ec" stroke="#5c3317" stroke-width="1"/>
            <!-- Cup body -->
            <path d="M28 50 Q24 80 30 88 Q38 96 57 96 Q76 96 84 88 Q90 80 86 50 Z" fill="#fdf6ec" stroke="#5c3317" stroke-width="2"/>
            <!-- Cup rim -->
            <ellipse cx="57" cy="50" rx="29" ry="8" fill="#f5ede0" stroke="#5c3317" stroke-width="2"/>
            <!-- Coffee surface -->
            <ellipse cx="57" cy="50" rx="24" ry="6" fill="#5c3317" opacity="0.85"/>
            <!-- Latte art heart -->
            <path d="M50 48 Q50 44 54 46 Q57 44 64 48 Q60 52 57 56 Q54 52 50 48Z" fill="#c8924a" opacity="0.6"/>
            <!-- Handle -->
            <path d="M85 58 Q98 58 98 68 Q98 78 85 78" stroke="#5c3317" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <!-- Decorative line on cup -->
            <path d="M34 70 Q57 66 80 70" stroke="#c8924a" stroke-width="1" stroke-dasharray="3 2" opacity="0.5"/>
        </svg>
        `;
    }
}

customElements.define("coffee-svg", CoffeeSvg);


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
