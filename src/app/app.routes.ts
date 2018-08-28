import {Routes,RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {InfoComponent} from './info/info.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import { WebComponent } from './web/web.component';

const routes:Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'quienes-somos',component:InfoComponent},
    {path:'landing-page',component:LandingpageComponent},
    {path:'web',component:WebComponent}
];


export const Router = RouterModule.forRoot(routes)


