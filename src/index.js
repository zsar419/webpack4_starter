import './_scss/styles.scss';
import './js/test.js';

// alert("HIs");

const res = async () => await fetch('google.com').then(res => res.body);
alert(`${res()} test`);