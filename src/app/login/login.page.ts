import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = ''; // Cambiado de 'username' a 'email'
  password: string = '';
  showError: boolean = false;

  constructor(private router: Router, private supabaseService: SupabaseService) {}

  async onSubmit() {
    // ... (lógica de autenticación)
  }

  goToRegistro() {
    this.router.navigate(['/registro']); // Ruta a la página de registro
  }
}
