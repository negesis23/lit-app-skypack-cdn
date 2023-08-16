import {
 html,
 LitElement
} from 'https://cdn.skypack.dev/lit';


class Home extends LitElement {
 render() {
  return html`
  <h2>Home</h2>
  <button @click=${() => alert('button clicked')}>button</button>
  `;
 }
}

customElements.define('x-home', Home);