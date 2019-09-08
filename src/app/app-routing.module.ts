import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirComponent } from './dir/dir.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { MembershipComponent } from './membership/membership.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChildComponent } from './child/child.component';
import { MasterComponent } from './master/master.component';


const routes: Routes = [
  {path: '', component: DatabindingComponent},
  {path: 'dir', component: DirComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'product', component: ProductComponent}, // optional params
  {path: 'category', component: CategoryComponent}, // Query params
  {path: 'about', component: AboutComponent, children: [
    {path: 'profile', component: ProfileComponent},
    {path: 'membership', component: MembershipComponent}
    ]
  },
  {path: 'pipes', component: PipesComponent},
  {path: 'inheritance', component: ChildComponent},
  {path: 'nested', component: MasterComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
