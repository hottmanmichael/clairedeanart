'use strict';

import Welcome from './controllers/public/index';
import Menu from './modules/global/menu';
import About from './modules/public/about';
export let Main = {
    Welcome,
    Menu,
    About
}

//Admin
import AdminIndex from './modules/admin/index';
import Login from './controllers/auth/login';
import Upload from './controllers/admin/upload';
export let Admin = {
    AdminIndex,
    Login,
    Upload
}
