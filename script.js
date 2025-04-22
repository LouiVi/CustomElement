class MultiSystems extends HTMLElement {
    constructor() {
        super(); // Always call super first in constructor
        const shadow = this.attachShadow({ mode: 'open' }); // Create a shadow root

        // Create a simple template
        const wrapper = document.createElement('div');
        wrapper.textContent = 'Hello, welcome to my custom element!';
        wrapper.style.fontSize = '20px';
        wrapper.style.color = 'blue';
        wrapper.innerHTML = "LuilloSoft Inc.";

        // Append the template to the shadow root
        shadow.appendChild(wrapper);
    }
}

// Define the new element
customElements.define('multi-systems', MultiSystems);