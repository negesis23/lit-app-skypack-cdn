import {
 html,
 LitElement,
} from 'https://cdn.skypack.dev/lit';

class App extends LitElement {
 render() {
  return html`
  <a href="/">Home</a>
  <a href="/foo">Foo</a>
  <slot name="router-outlet"></slot>
  `;
 }
}

customElements.define('x-app', App);