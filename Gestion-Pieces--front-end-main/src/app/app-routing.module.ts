import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiecesComponent } from './piece/pieces.component';
import { AuthGuard } from './guards/secure.guard';


const routes: Routes = [
  {path: "produits", component : PiecesComponent,canActivate:[AuthGuard],
  data : {roles:['ADMIN']}}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 