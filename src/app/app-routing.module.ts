import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ResenaComponent } from './pages/resena/resena.component';



const routes: Routes = [
  //así se redirige el componente 
  {path: '', component: PortafolioComponent },
  {path: 'acercade', component: AcercadeComponent },
  {path: 'resena', component: ResenaComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
