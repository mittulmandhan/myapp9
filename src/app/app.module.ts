import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirComponent } from './dir/dir.component';
import { HighlightDirective } from './highlight.directive';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { MembershipComponent } from './membership/membership.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReversePipe } from './reverse.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MasterComponent } from './master/master.component';
import { DetailsComponent } from './details/details.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { EqualTextValidator } from 'angular2-text-equality-validator';
import { ModelformComponent } from './modelform/modelform.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirComponent,
    HighlightDirective,
    NotfoundComponent,
    ProductComponent,
    CategoryComponent,
    AboutComponent,
    ProfileComponent,
    MembershipComponent,
    PipesComponent,
    ReversePipe,
    ParentComponent,
    ChildComponent,
    MasterComponent,
    DetailsComponent,
    TemplateformComponent,
    EqualTextValidator,
    ModelformComponent,
    Service1Component,
    Service2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
