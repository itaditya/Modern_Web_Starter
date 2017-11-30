import { addEvent, dispatchEvent } from '../utilities/eventBus';


document.getElementById('sidebar').innerHTML = 'sidebar';

console.log([1, 2].map(x => x * 2));

const onToggle = () => {
  console.log('toggling');
};

addEvent('sidebar/toggle', onToggle);

setTimeout(() => {
  console.log('event dispatched');
  dispatchEvent('sidebar/toggle');
}, 1100);
