import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'ns-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    name: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToSignIn(){
      return this.router.navigate(["/login"]);
  }
  register(){
    alert(`name ${this.name}; email ${this.email}; password: ${this.password}; confPass: ${this.confirmPassword}`);

  }
}
