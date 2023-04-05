import Observer from '../Observer.js';

class InputModel extends Observer {
  state;

  constructor() {
    super();

    this.state = '';
  }

  getState() {
    return this.state;
  }

  setState(key, newState) {
    this.state = newState;
    this.notify(key);
  }
}

const inputModel = new InputModel();
export default inputModel;
