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
import { VerticalBarChartComponent } from './vertical-bar-chart/vertical-bar-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { ProfileComponent } from './profile/profile.component';
import { ApproveComponent } from './approve/approve.component';

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
    VerticalBarChartComponent,
    LineGraphComponent,
    ProfileComponent,
    ApproveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
