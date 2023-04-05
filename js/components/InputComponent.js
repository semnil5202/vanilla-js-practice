import inputModel from '../domain/InputModel.js';

export default class InputComponent {
  $target;

  constructor(target) {
    this.$target = target;

    this.render();
    this.addEvent();
  }

  render() {
    this.$target.innerHTML = `
    <form action="submit">
     <input type="text" />
     <button>submit</button>
    </form>
    `;
  }

  addEvent() {
    this.$target.addEventListener('submit', (e) => {
      e.preventDefault();

      inputModel.setNameState([...e.target][0].value);
    });
  }
}
