import './menu.js';
import './valid-mail.js';

document.addEventListener('DOMContentLoaded', function() {
    const radioStn = document.querySelectorAll('#simple, #speedy, #easy');
    const radioCheck = document.querySelectorAll('input[name="features"]');
    const freqQuez = document.querySelectorAll('.freq__quez');

    /* ######### RADIO SECTIONS ########### */

    radioCheck.forEach(element => {
        element.addEventListener("change", () => {
            featureStn(element.dataset.features);
        });
    });

      /* #########  ACOORD QUEZ ############# */

    freqQuez.forEach(e => {
        e.addEventListener('click', askedInfo);
    });


    function askedInfo() {
        freqQuez.forEach(e => {
            const detail = e.parentNode;
            if (detail != this.parentNode) {
                detail.removeAttribute('open');
            };
        });
    };

    /*  #########  Aria CHECK ########## */

    radioCheck.forEach(e => {
        e.addEventListener('change', () => {
            radioCheck.forEach(element => element.parentElement.setAttribute('aria-selected', element.checked));
        });
    });

    /* ######## FUNCION SECTION FEATURES RADIOS ########### */

    function featureStn(feature) {
        radioStn.forEach(element => {
            element.classList.toggle('hidden', element.id != feature);
        });
    }
    
});
