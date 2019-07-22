import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    CountryListComponent,
    CountryInfoComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedComponentsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'region',component:RegionComponent},
      {path:'',redirectTo:'region',pathMatch:'full'},
      {path:'countries/:pname/:type',component:CountryListComponent},
      {path:'country-info/:cname',component:CountryInfoComponent},
      {path:'**',component:PageNotFoundComponent}
    ]),
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
