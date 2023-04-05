class InputModel {
  state;

  constructor() {
    this.state = { name: '' };
  }

  registerRenderMethod(renderMethod) {
    this.state = new Proxy(this.state, {
      set: (obj, prop, value) => {
        obj[prop] = value;
        renderMethod();
        return true;
      },
    });
  }

  setNameState(name) {
    this.state.name = name;
  }

  getNameState() {
    return this.state.name;
  }
}

const inputModel = new InputModel();
export default inputModel;
