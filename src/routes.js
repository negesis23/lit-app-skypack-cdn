import {
 Router
} from 'https://cdn.skypack.dev/@vaadin/router';

const router = new Router(document.querySelector('[slot=router-outlet]'));

router.setRoutes([{
 path: '/',
 action: async () => {
  await import('../pages/Home.js');
 },
 component: 'x-home',
},
 {
  path: '/foo',
  action: async () => {
   await import('../pages/Foo.js');
  },
  component: 'x-foo'
 },
 {
  path: '(.*)',
  action: async () => {
   await import('../pages/NotFound.js');
  },
  component: 'x-404'
 }]);