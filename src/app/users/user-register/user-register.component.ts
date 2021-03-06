import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EUserType } from 'src/app/core/models/EUserType';
import { User } from 'src/app/core/models/users';
import { userService } from '../../core/services/userService/user-form-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  host:{
    class:'container mt-5'
  }
})
export class UserRegisterComponent implements OnInit {

   user = new User;
   name : string;
   email : string;
   username : string;
   password : string;

  constructor(private userService: userService, private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){

    this.user.name = this.name;
    this.user.email = this.email;
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.type = EUserType.client;

    this.userService.guardarUser(this.user).subscribe(data => {
      alert('Guardado exitosamente');
      this.router.navigate(['login']);
    })
  }

}
