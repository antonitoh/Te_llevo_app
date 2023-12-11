import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  userName!: string;
  email!: string;
  password!: string;

  constructor(public navCtrl: NavController) {}

  guardarCambios() {
    // Aquí debes implementar la lógica para guardar los cambios en la base de datos o en tu servicio de autenticación.
    // Ejemplo: actualiza el nombre de usuario y el correo en una base de datos.
  }
}
