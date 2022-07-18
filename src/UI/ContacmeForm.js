import { HttpReq } from '../Utility/HTTP';
import { validateEmail } from '../Utility/inputsValidators';




const PROTOCOL = 'https'
// const SERVER_URL = 'localhost';
// const PORT = 3000;
const SERVER_URL = 'eip-my-summary.herokuapp.com';
const PORT = "";

export class ContacMeForm {
    constructor() {
        const server = new HttpReq(PROTOCOL, SERVER_URL, PORT);

        this.fillingContactMeForm;

        this.modalReadyButton = document.getElementById('modal-ready-button');
        this.modalFaultButton = document.getElementById('modal-fault-button');
        this.modalSendAnotherButton = document.querySelector('#modal-ready .btn-primary');
        this.modalTryAgainButton = document.querySelector('#modal-fault .btn-primary');


        this.contacMe = document.getElementById('_carouselItemContactMe');
        this.name = this.contacMe.querySelector('#_userInputName');
        this.email = this.contacMe.querySelector('#_userInputEmail');
        this.subject = this.contacMe.querySelector('#_userInputSubject');
        this.messagge = this.contacMe.querySelector('#_userInputMessagge');
        this.buttonSendMessage = this.contacMe.querySelector('#_buttonSend');

        // condition to say that the client is filling th form
        this.name.addEventListener('click', this.fillingContactMeFormFunctionHandler.bind(this));
        this.email.addEventListener('click', this.fillingContactMeFormFunctionHandler.bind(this));
        this.subject.addEventListener('click', this.fillingContactMeFormFunctionHandler.bind(this));
        this.messagge.addEventListener('click', this.fillingContactMeFormFunctionHandler.bind(this));

        this.buttonSendMessage.addEventListener('click', this.sendMessagge.bind(this));

        // working whit modals
        this.modalSendAnotherButton.addEventListener('click', () => {
            this.modalReadyButton.click();
            this.messagge.value = '';
        });
        this.modalTryAgainButton.addEventListener('click', () => {
            this.modalFaultButton.click();
        });
    }

    sendMessagge() {
        const userContact = {
            name: this.name.value.trim(),
            subject: this.subject.value.trim(),
            email: this.email.value.trim().toLowerCase(),
            messagge: this.messagge.value.trim()
        };


        if (!userContact.name) {
            // alert('please insert a name');
            this.name.classList.add('border-color-red');
            return;
        }
        else {
            this.name.classList.remove('border-color-red');
        }

        if (!validateEmail(userContact.email)) {
            // alert('please insert a valid mail');
            this.email.classList.add('border-color-red');
            return;
        }

        else {
            this.email.classList.remove('border-color-red');
        }

        if (!userContact.subject) {
            // alert('please insert a subject');
            this.subject.classList.add('border-color-red');
            return;
        }
        else {
            this.subject.classList.remove('border-color-red');
        }

        if (!userContact.messagge) {
            // alert('please insert a messagge');
            this.messagge.classList.add('border-color-red');
            return;
        }
        else {
            this.messagge.classList.remove('border-color-red');
        }

        const server = new HttpReq(PROTOCOL, SERVER_URL, PORT);

        server.sendHttpRequest('POST', '/contact-me-mail', userContact).then(resp => {
            console.log(resp);
            if (resp.status) {
                this.modalReadyButton.click();
            }
            else {
                this.modalFaultButton.click();
            }

        }).catch(error => {
            this.modalFaultButton.click();
        });
    }

    fillingContactMeFormFunctionHandler() {
        this.fillingContacteForm();
    }
}