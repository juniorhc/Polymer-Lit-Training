import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

export default class SideMenu extends LitElement {
    constructor() {
        super();
        this.total = {
            number: 0
        };
    }

    static get properties() {
        return {
            togglePopup: Function
        }
    }


    firstUpdated(changedProperties) { 

    }

    render() {
        return html`
<style>
        @import '/css/global.css';
        #side-menu{
            background: #323759;
            height: 100vh;
            padding: 50px 25px;
        }

        .logo{
            text-align: center;
        }
        .logo img{
            width: 50px;
        }
        .title{
            font-weight: 700;
            color: #ccced7;
            margin: 1rem 0;
        }
        #side-menu nav a{
            color: #ccced7;
            text-decoration: none;
            text-transform: capitalize;
            display: block;    
            padding: 10px 10px 0;
        }
        #side-menu nav a span.icon{
            padding: 10px 10px 10px 0;
        }
</style>

<section id="side-menu">
    <div class="logo">
        <img src="https://icon-library.net/images/icon-png-transparent-background/icon-png-transparent-background-6.jpg" />
    </div>
    <div class="menu">
    <div class="title"> Contacts </div>
    <nav>
        <a href="#" @click="${this.togglePopup}"><span class="icon"> + </span> Add Contact </a>
        <a href="#"><span class="icon"> + </span> Add Contact </a>
        <a href="#"><span class="icon"> + </span> Add Contact </a>
        <a href="#"><span class="icon"> + </span> Add Contact </a>
    </nav>
    </div>
</section>


               `
    }


}

customElements.define('side-menu', SideMenu);