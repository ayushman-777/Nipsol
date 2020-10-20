import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import {HomeComponent} from "./home/home.component";
import {AllUserComponent} from "./all-user/all-user.component";




const routes: Routes = [
    {path: 'addUser', component: AddUserComponent},
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'allUser', component: AllUserComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [AddUserComponent, HomeComponent, AllUserComponent];
