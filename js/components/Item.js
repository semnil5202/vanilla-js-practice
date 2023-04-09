export default class Item extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', (e) => {
      alert(`${e.target.parentNode.parentNode.className}, ${e.target.innerHTML}`);
    });
  }
}
