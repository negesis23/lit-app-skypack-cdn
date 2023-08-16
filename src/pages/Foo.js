import {
 html,
 LitElement
} from 'https://cdn.skypack.dev/lit';

class Foo extends LitElement {
 render() {
  return html`
  <h2>Foo</h2>
  <p>Foo</p>
  `;
 }
}

customElements.define('x-foo', Foo);