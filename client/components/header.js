import { addEvent } from '../utilities/eventBus';


document.getElementById('header').innerHTML = 'header';

addEvent('sidebar/toggle', (payload) => {
  console.log(payload);
  console.log('header');
});
