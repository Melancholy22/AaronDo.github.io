import barba from '@barba/core';
import barbaCSS from '@barba/css';

barba.use(barbaCSS);

barba.init({
  transitions: [
    {
        once(){
            console.log('It ran');
        }
    }
  ],
});