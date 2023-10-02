// import {barba} from '@barba/core';
// import {barbaCSS} from '@barba/css';
import barba from 'https://unpkg.com/@barba/core@2.9.7/dist/barba.mjs';
import barbaCss from 'https://unpkg.com/@barba/css@2.1.15/dist/barba-css.mjs';

barba.use(barbaCss);

barba.init({
  transitions: [
    {
        once(){
            console.log('It ran');
        }
    }
  ],
});