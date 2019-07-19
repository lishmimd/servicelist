import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicecompComponent } from './servicecomp/servicecomp.component';
import { CserviceService } from './service/cservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ServicecompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CserviceService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
