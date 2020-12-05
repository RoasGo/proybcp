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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { UsuarioComponent } from './components/usuario/usuario.component';

import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './services/usuario.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioActualizarComponent } from './components/usuario-actualizar/usuario-actualizar.component';
import { CampanasComponent } from './components/campanas/campanas.component';
import { CampanaRegistroComponent } from './components/campana-registro/campana-registro.component';
import { CampanaActulizarComponent } from './components/campana-actulizar/campana-actulizar.component';

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
    ConfigNotificacionesComponent,
    UsuarioComponent,


    RegistroUsuarioComponent,


    UsuarioActualizarComponent,


    CampanasComponent,


    CampanaRegistroComponent,


    CampanaActulizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    NgbModule

  ],
  providers: [AuthService, UsuarioService, UsuarioComponent, CampanasComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
