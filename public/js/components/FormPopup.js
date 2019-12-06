import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import ContactsList  from '/js/components/ContactsList.js';
import FavoritesList  from '/js/components/FavoritesList.js';

export default class FormPopup extends LitElement {

    constructor() {
        super();
        this.total = {
            number: 0
        };
        this.popupOpen = false;
    }

    static get properties() {
        return {
            total: Object,
            popupOpen: Boolean
        }
    }


    firstUpdated(changedProperties) {
        
    }

    render() {
        const { color, background, fontWeight } = this;
        return html`
        <style>
            @import '/css/global.css';
            .form-popup{
                background: #2b304c;
                height: 100vh;
                width: 100vw;
                position: fixed;
                top: 0;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2;
                visibility: hidden;
                transition: all .4s ease-in-out;
                opacity: 0;
            }
            .form-popup.active{
                visibility: visible;
                opacity: 1;
            }
            form{
                width: 400px;
                background: white;
                padding: 20px;
                border-radius: 10px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-gap: 20px;
            }
            h2{
                font-size: 1.4rem;
                font-weight: 500;
                grid-column: 1/5;
            }
            .form-group{
                padding: 0;
                position: relative;
            }
            label{
                font-size: .7rem;
                background: white;
                position: absolute;
                top: -5px;
                display: inline-block;
                
            }
            input[type="text"]{
                padding: 10px;
                display: block;
                width: 100%;
            }
            .first-name{
                grid-column: 1/3;
            }
            .last-name{
                grid-column: 3/5;
            }
            .address-1{
                grid-column: 1/5;
            }
            .address-2{
                grid-column: 1/5;
            }
            .city{
                grid-column: 1/3;
            }
            .button{
                justify-self: end;
                grid-column: 4/5;
            }
            .button button{
                cursor: pointer;
                padding: 10px 25px;
                background: rgb(2,0,36);
                background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(61,61,212,1) 61%, rgba(0,212,255,1) 100%);
                border: 1px solid rgba(0, 0, 0, .1);
                color: white;
                border-radius: 5px;
                text-shadow: 4px 4px 2px rgba(0, 0, 0, 1);
            }
            .closing-btn{
                position: absolute;
                z-index:3;
                right: 20px;
                top: 0;
                font-size: 2rem;
                color: red;
                padding: 20px;
            }
            .closing-btn svg{
                width: 24px;
                height: 24px;
                fill: white;
            }
        </style>
        <section class="form-popup ${(this.popupOpen) ? 'active' : ''}">
            <form>

                <div class="closing-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                </div>

                <h2>Add a new contact</h2>

                <div class="form-group first-name">
                    <label for="first_name">First Name</label>
                    <input type="text" name="first_name">
                </div>
                
                <div class="form-group last-name">
                    <label for="last_name">Last Name</label>
                    <input type="text" name="last_name">
                </div>

                <div class="form-group address-1">
                    <label for="address_1">Address #1</label>
                    <input type="text" name="address_1">
                </div>

                <div class="form-group address-2">
                    <label for="address_1">Address #2</label>
                    <input type="text" name="address_2">
                </div>

                <div class="form-group city">
                    <label for="city">City</label>
                    <input type="text" name="city">
                </div>

                <div class="form-group state">
                    <label for="state">State</label>
                    <input type="text" name="state">
                </div>

                <div class="form-group zipcode">
                    <label for="zipcode">Zipcode</label>
                    <input type="text" name="zipcode">
                </div>

                <div class="form-group button">
                    <button type="submit">Add</button>
                </div>

            </form>
        </section>
    `
    }
}

customElements.define('form-popup', FormPopup);