import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"home",
        title:"ng ui",
        loadComponent: () => import("./pages/home/home.component")
    },
    {
        path:"",
        redirectTo:"home",
        pathMatch:'full'
    }
];
