import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Frontend/Components/navbar/navbar.component';
import { CarouselComponent } from './Frontend/Components/carousel/carousel.component';
import { AdminloginComponent } from './Frontend/Components/adminlogin/adminlogin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerformComponent } from './Frontend/Components/customerform/customerform.component';
import { AboutusComponent } from './Frontend/Components/aboutus/aboutus.component';
import { ComplainComponent } from './Frontend/Components/complain/complain.component';
import { PlansComponent } from './Frontend/Components/plans/plans.component';
import { SignupComponent } from './Frontend/Components/signup/signup.component';
import { UserloginComponent } from './Frontend/Components/userlogin/userlogin.component';
import { UseraccountComponent } from './Frontend/Components/useraccount/useraccount.component';
import { LogoutComponent } from './Frontend/Components/logout/logout.component';
import { DongleplansComponent } from './Frontend/dongleplans/dongleplans.component';
import { PostpaidplansComponent } from './Frontend/Components/postpaidplans/postpaidplans.component';
import { PrepaidplansComponent } from './Frontend/Components/prepaidplans/prepaidplans.component';
import { PaymentComponent } from './Frontend/Components/payment/payment.component';
import { LandingserviceComponent } from './Frontend/Components/landingservice/landingservice.component';
import { RechargedoneComponent } from './Frontend/Components/rechargedone/rechargedone.component';
import { UserlandingComponent } from './Frontend/Components/userlanding/userlanding.component';
import { BilldetailsComponent } from './Frontend/Components/billdetails/billdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AdminloginComponent,
    CustomerformComponent,
    AboutusComponent,
    ComplainComponent,
    PlansComponent,
    SignupComponent,
    UserloginComponent,
    UseraccountComponent,
    LogoutComponent,
    DongleplansComponent,
    PostpaidplansComponent,
    PrepaidplansComponent,
    PaymentComponent,
    LandingserviceComponent,
    RechargedoneComponent,
    UserlandingComponent,
    BilldetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
