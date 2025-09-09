
/* ####### VALID EMAIL ############### */
const stayInput = document.querySelector('#stay__input');
const formMail = document.querySelector('#form__mail');
const errorWoops = document.querySelector('#error__woops');
const errorIcon = document.querySelector('#error__icon');
const freqQuez = document.querySelectorAll('.freq__quez');
const validRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const mediaMobile = window.matchMedia("(max-width: 39.25em)");


formMail.addEventListener('input', () => {
    console.log('input enter');
    errorWoops.classList.remove('error__mail');
    stayInput.classList.remove('error__outline');
    errorIcon.classList.remove('error__visible');
    formMail.classList.remove('gap-9')
});

formMail.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log('input submit');
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

