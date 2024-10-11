import { Routes } from '@angular/router';
import { SIGNUPComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'signup', component: SIGNUPComponent },
    {path: 'login', component: LoginComponent },
];
