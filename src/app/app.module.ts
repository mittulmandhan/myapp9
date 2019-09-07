import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    MembershipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
