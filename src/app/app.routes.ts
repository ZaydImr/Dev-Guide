import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./modules/layouts/app-layout/app-layout.component').then(res => res.AppLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./modules/home/home.component').then(res => res.HomeComponent)
            }
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./modules/layouts/auth-layout/auth-layout.component').then(res => res.AuthLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./modules/auth/login/login.component').then(res => res.LoginComponent)
            }
        ]
    },
    {
        path: 'register',
        loadComponent: () => import('./modules/layouts/auth-layout/auth-layout.component').then(res => res.AuthLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./modules/auth/register/register.component').then(res => res.RegisterComponent)
            }
        ]
    },
    {
        path: '401',
        loadComponent: () => import('./modules/error/unauthorized/unauthorized.component').then(res => res.UnauthorizedComponent)
    },
    {
        path: '403',
        loadComponent: () => import('./modules/error/forbiden/forbiden.component').then(res => res.ForbidenComponent)
    },
    {
        path: '404',
        loadComponent: () => import('./modules/error/not-found/not-found.component').then(res => res.NotFoundComponent)
    },    
    {
        path: '**',
        redirectTo: '404'
    }
];
