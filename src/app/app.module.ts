import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AccordionModule,InputTextModule,DataTableModule,SharedModule,ButtonModule,MenuItem,ConfirmDialogModule,ConfirmationService,GrowlModule,MessagesModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { AppRouteRoutingModule } from './app-route-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterFomPageComponent } from './register-fom-page/register-fom-page.component';
import { ElderUserService } from './elder-user.service';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    PageNotFoundComponent,
    RegisterFomPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MdButtonModule,
    MaterialModule.forRoot(),
    MdCheckboxModule,
    FlexLayoutModule,
    AppRouteRoutingModule,
    AccordionModule,
    JsonpModule,
    InputTextModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    ConfirmDialogModule,
    GrowlModule,
    MessagesModule
  ],
  providers: [ElderUserService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
