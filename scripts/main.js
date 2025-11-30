// See skript sisaldab funktsioone Kopli Couture lehe jaoks.

// Funktsioon päeva/öö režiimi vahetamiseks, loodud Tom Kristian Abel poolt.
function aktiveeriNightMode() {
    // Kontrollime, kas öö režiimi stiilid on juba lisatud
    const styleId = 'night-mode-css';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        // Lisame CSS reeglid: inverteerime kogu lehe värvid (terve body),
        // kuid pildid inverteerime veel topelt (et saada tagasi normaalseks)
        style.innerHTML = `
            .night-mode {
                filter: invert(100%);
            }
            .night-mode img, .night-mode video, .night-mode picture {
                filter: invert(100%);
            }
        `;
        document.head.appendChild(style);
    }

    // Lülitame sisse või välja 'night-mode' klassi body elemendil
    document.body.classList.toggle('night-mode');
}
