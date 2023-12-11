import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {
  username:string = '';
  email: string = '';
  password: string = '';

  // Resto del código...

  constructor(public supabaseService: SupabaseService, private router: Router) {}


  async registrar() {
    try {
      const supabase = this.supabaseService.getSupabase();
      const { data, error } = await supabase.auth.signUp({
        email: this.email,
        password: this.password,
      });
  
      if (error) {
        console.error(error);
        // Manejar el error de registro, por ejemplo, mostrar un mensaje al usuario.
      } else if (data?.user) {
        console.log(data.user);
        // Usuario registrado exitosamente. Puedes redirigir a la página de inicio de sesión o realizar otras acciones.
        this.router.navigate(['/login']); // Redirige a la página de inicio de sesión después del registro.
      }
    } catch (error) {
      console.error(error);
      // Manejar el error de manera apropiada, por ejemplo, mostrar un mensaje al usuario.
    }
  }
  
}