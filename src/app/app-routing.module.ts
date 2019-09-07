import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirComponent } from './dir/dir.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path: '', component: DatabindingComponent},
  {path: 'dir', component: DirComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'product', component: ProductComponent}, // optional params
  {path: 'notfound', component: NotfoundComponent},
  {path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
