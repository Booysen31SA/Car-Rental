import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerComponent } from './customer/customer.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    TopBarComponent,
    CustomerComponent,
    VehiclesComponent,
    CarRentalComponent,
    DashboardComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
