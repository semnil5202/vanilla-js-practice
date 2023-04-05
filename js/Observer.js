export default class Observer {
  observers;

  constructor() {
    this.observers = {
      ALL: [],
      TWO: [],
      ONE: [],
    };
  }

  subscribe(key, observer) {
    this.observers[key].push(observer);
  }

  notify(key) {
    this.observers[key].forEach((observer) => observer());
  }
}
