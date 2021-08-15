import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './Components/adduser/adduser.component';
import { DetailsComponent } from './Components/details/details.component';
import { ErrorComponent } from './Components/error/error.component';
import { UpdateuserComponent } from './Components/updateuser/updateuser.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path:"" , redirectTo :"users" , pathMatch:"full"},
  {path:"users" , component:UsersComponent},
  {path:"adduser" , component:AdduserComponent},
  {path:"users/:id" , component:DetailsComponent},
  {path:"update/:id" , component:UpdateuserComponent},
  {path:"**" ,component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
