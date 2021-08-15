import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { UpdateuserComponent } from './Components/updateuser/updateuser.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AdduserComponent } from './Components/adduser/adduser.component';
import { ErrorComponent } from './Components/error/error.component';
import { DetailsComponent } from './Components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UpdateuserComponent,
    NavbarComponent,
    AdduserComponent,
    ErrorComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
