import { Routes } from '@angular/router';

import { Home as HomeComponent } from './home/home';
import { BodyComponent } from './body/body';
import { Header as HeaderComponent } from './header/header';
import { Footer as FooterComponent } from './footer/footer';

export const routes: Routes = [
    { path: '', component: HomeComponent },   // default route
    { path: 'body', component: BodyComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
];
