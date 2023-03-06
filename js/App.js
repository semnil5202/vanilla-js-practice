import { qs } from './util.js';
import Component from './components/Component.js';
import SectionComponent from './components/SectionComponent.js';
import DivComponent from './components/DivComponent.js';

export default class App extends Component {
  constructor() {
    super(qs('#app'));

    new SectionComponent(qs('section'));
    new DivComponent(qs('.abc'));
  }

  template() {
    return `
    <section></section>

    <div class="abc"></div>
    `;
  }
}

new App();
