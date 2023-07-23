export default class Observer {
  _observers;

  constructor() {
    this._observers = [];
  }

  subscribe(observer) {
    this._observers.push(observer);
  }

  notify(newData) {
    this._observers.forEach((observer) => observer(newData));
  }
}
