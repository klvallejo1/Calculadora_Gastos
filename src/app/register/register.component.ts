import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formulario: FormGroup;
  usersService = inject(UsersService);

  constructor(){
    this.formulario = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit(){
    const response= await this.usersService.register(this.formulario.value);
    console.log(response);

  }

}
