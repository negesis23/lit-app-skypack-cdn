import {
 html,
 LitElement
} from 'https://cdn.skypack.dev/lit';

class NotFound extends LitElement {
 render() {
  return html`
  <h2>404 Not Found</h2>
  <p>404 Not Found</p>
  `;
 }
}

customElements.define('x-404', NotFound);