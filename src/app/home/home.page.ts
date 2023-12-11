import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string;

  constructor(private navCtrl: NavController) {
    this.username = 'antonitoh';
  }

  ngOnInit() {}

  irAPerfil() {
    this.navCtrl.navigateForward('/profile');
  }

  irViajes() {
    this.navCtrl.navigateForward('/viajes');
  }

  irLogin() {
    this.navCtrl.navigateForward('/login');
  }
}
