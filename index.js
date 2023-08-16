import './App.js';
import './routes.js';


if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('sw.js')
 .then(() => console.log('SW registered'))
 .catch(err => console.error('SW Error:', err));
}
