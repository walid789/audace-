import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Somme2Component } from './somme2/somme2.component';
import { LoginComponent } from './login/login.component';
import { MaritimComponent } from './maritim/maritim.component';
import { AerienComponent } from './aerien/aerien.component';
import { TerresreComponent } from './terresre/terresre.component';
import { LogistiqueComponent } from './logistique/logistique.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Cotation1Component } from './cotation1/cotation1.component';


const routes: Routes = [{path:'accueil', component:LoginComponent},
  {path:'sommes', component:Somme2Component},
  {path:'martime', component:MaritimComponent},
  {path:'arien', component:AerienComponent},
  {path:'terrsre', component:TerresreComponent},
  {path:'logistique', component:LogistiqueComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'cotation1', component:Cotation1Component},
{path:'', redirectTo:'accueil', pathMatch:'full'} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
