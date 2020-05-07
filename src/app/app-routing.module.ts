import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodoComponent } from './todo/todo.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGuardService } from './service/router-guard.service';


const routes: Routes = [{path:'login', component:LoginComponent}, {path:'', component:LoginComponent},
{path:'welcome/:name', component:WelcomeComponent, canActivate:[RouterGuardService]},
{path:'todo', component:TodoComponent, canActivate:[RouterGuardService]},
{path:'login', component:LoginComponent, canActivate:[RouterGuardService]},
{path:'logout', component:LogoutComponent, canActivate:[RouterGuardService]},
{path:'**', component:ErrorComponent, canActivate:[RouterGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
