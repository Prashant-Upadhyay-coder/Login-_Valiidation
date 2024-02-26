import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MycontainerComponent } from './mycontainer/mycontainer.component';

const routes: Routes = [
  {
    path:'',redirectTo:'content',pathMatch:'full'
  },
  {
    path:'content',component:MycontainerComponent
  },
  {
    path:'home',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
