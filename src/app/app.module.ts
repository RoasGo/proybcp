import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ChatbotComponent } from './components/shared/chatbot/chatbot.component';
import { ConfigComponent } from './components/config/config.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { ConfigGeneralComponent } from './components/config-general/config-general.component';
import { ConfigNotificacionesComponent } from './components/config-notificaciones/config-notificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ChatbotComponent,
    ConfigComponent,
    LoginComponent,
    DashboardComponent,
    RegistroComponent,
    LoginPageComponent,
    TransferComponent,
    ConfigGeneralComponent,
    ConfigNotificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
