import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiecesComponent } from './piece/pieces.component';
import { FormsModule } from '@angular/forms';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HttpClientModule } from '@angular/common/http';

// Fonction pour initialiser Keycloak avant de lancer l'application
function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8090',  // URL du serveur Keycloak
        realm: 'master-realm',  // Nom du realm dans Keycloak
        clientId: 'piece-app'  // ID du client dans Keycloak
      },
      initOptions: {
        //onLoad: 'login-required',  // Forcer la connexion au démarrage
        //checkLoginIframe: true // Activer la vérification du login via iframe
        onLoad: 'check-sso',
silentCheckSsoRedirectUri:
window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    PiecesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule  // Module Keycloak Angular
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
