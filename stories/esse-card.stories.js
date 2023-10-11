import { html } from 'lit';
import '../src/esse-card.js';

export default {
  title: 'EsseCard',
  component: 'esse-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <esse-card
      style="--esse-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </esse-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
