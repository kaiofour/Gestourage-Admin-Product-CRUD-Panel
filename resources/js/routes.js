const main= () => import('./login.js')
export const routes = [
    {
        name: 'login',
        path: '/',
        component: login
    }
]