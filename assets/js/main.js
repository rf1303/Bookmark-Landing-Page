document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicio');
    const scrollBody = document.querySelector("body");
    const btnOpen = document.querySelector('#btn-open');
    const btnLabel = document.querySelector('.btn-label');
    const logoBook = document.querySelector('.bookmark__img');
    const circleBook = logoBook.querySelector('.bookCircle');
    const pathBook = logoBook.querySelector('.bookPath');
    const radioStn = document.querySelectorAll('#simple, #speedy, #easy');
    const radioCheck = document.querySelectorAll('input[name="features"]');
    const stayInput = document.querySelector('#stay__input');
    const formMail = document.querySelector('#form__mail');
    const errorWoops = document.querySelector('#error__woops');
    const errorIcon = document.querySelector('#error__icon');
    const btnSubmit = document.querySelector('#btnSubmit');
    const freqQuez = document.querySelectorAll('.freq__quez');
    const validRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    const mediaMobile = window.matchMedia("(max-width: 39.25em)");


    /* ######## MENU HAMBURGER ########## */
    checkedBtn();

    btnOpen.addEventListener('change', () => {
        checkedBtn();
    });

    /* ######### RADIO SECTIONS ########### */

    radioCheck.forEach(element => {
        element.addEventListener("change", () => {
            featureStn(element.dataset.features);
        });
    });

    /* ####### VALID EMAIL ############### */

    formMail.addEventListener('input', () => {
        errorWoops.classList.remove('error__mail');
        stayInput.classList.remove('error__outline');
        errorIcon.classList.remove('error__visible');
        formMail.classList.remove('gap-9')
    });

    formMail.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!validRegex.test(stayInput.value)) {
            errorWoops.classList.add('error__mail');
            stayInput.classList.add('error__outline');
            errorIcon.classList.add('error__visible');
            mediaForm(mediaMobile);
        } else {
            errorWoops.classList.remove('error__mail');
            stayInput.classList.remove('error__outline');
            errorIcon.classList.remove('error__visible');
            mediaForm(mediaMobile);
        }
    });

    freqQuez.forEach(e => {
        e.addEventListener('click', askedInfo);
    });

    /* #########  ACOORD QUEZ ############# */

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

    /* ######## FUNCION MENU HAMBURGER ########### */

    function checkedBtn() {
        console.log('btn-open: ', btnOpen.checked);
        if (btnOpen.checked) {
            console.log('btnOpen: checked');
            logoBook.classList.add('text-white');
            circleBook.classList.add('text-white');
            pathBook.classList.add('fill-gray-600')
            bodyScrollLockUpgrade.disableBodyScroll(scrollBody);
            console.log('disableBodyScroll');
            btnOpen.focus();
        } else {
            console.log('btnOpen: no-checked');
            logoBook.classList.remove('text-white');
            circleBook.classList.remove('text-white');
            pathBook.classList.remove('fill-gray-600')
            bodyScrollLockUpgrade.enableBodyScroll(scrollBody);
            console.log('enableBodyScroll');
            btnOpen.focus();

        }
    }

    /* ######## FUNCION SECTION FEATURES RADIOS ########### */

    function featureStn(feature) {
        radioStn.forEach(element => {
            element.classList.toggle('hidden', element.id != feature);
        });
    }

    /* ############## FUNCION MATCH MEDIA ERROR ############## */

    function mediaForm(e) {
        if (e.matches) {
            console.log('mediaMobile add-gap-9', e.matches);
            formMail.classList.add('gap-9');
        } else {
            console.log('mediaMobile remove-gap-9', e.matches);
            formMail.classList.remove('gap-9')
        }
    }

    /* ########## ACCESSILITY   ############# */

    btnOpen.addEventListener('change', () => {
        btnLabel.setAttribute('aria-expanded', btnOpen.Checked);
    });
});
