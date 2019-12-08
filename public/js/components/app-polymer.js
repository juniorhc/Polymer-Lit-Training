import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
// import { LitElement, html } from 'lit-element';
import SideMenu from '/js/components/SideMenu.js';
import ContentArea from '/js/components/ContentArea.js';

class CounterComp extends LitElement {


    static get properties() {
        return {
            popupOpen: {
                type: Boolean,
                value: false,
                notify: false
            },
            allContacts: Array
        };
    }

    constructor() {
        super();
        this.popupOpen = false;
        this.togglePopup = this.togglePopup.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.allContacts = [];
    }

    togglePopup() {
        this.popupOpen = !this.popupOpen;
        console.log("click");
        console.log(this.popupOpen);
        this.requestUpdate();
    }
    
    saveContact(contact, event){
        event.preventDefault();
        console.log("saved contact");
        console.log(contact);
        
        function immutablePush(arr, newEntry){
            return [ ...arr, newEntry];
        }
        let newArray = immutablePush(this.allContacts, contact);
        this.allContacts = newArray
        console.log('==============================');
        console.log(this.allContacts);
    }

    render() {
        const { color, background, fontWeight } = this;
        return html`
            <style>
                    @import '/css/global.css';
                    .main-page{
                        display: grid;
                        grid-template-columns: 250px 1fr;
                    }
            </style>

            <div class="main-page">
                <side-menu .togglePopup="${this.togglePopup}"></side-menu>
                <content-area .popupOpen="${this.popupOpen}" .togglePopup="${this.togglePopup}" .saveContact="${this.saveContact}"></content-area>
            </div>
        `
    }


}

customElements.define('counter-comp', CounterComp);