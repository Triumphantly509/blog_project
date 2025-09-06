import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { BodyComponent } from './body/body';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { PostDetailComponent } from './post-detail/post-detail';

export const routes: Routes = [
    { path: '', component: HomeComponent },   // default route
    { path: 'body', component: BodyComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'post/:id', component: PostDetailComponent }
];
