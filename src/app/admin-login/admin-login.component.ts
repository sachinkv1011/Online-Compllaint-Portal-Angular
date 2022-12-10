import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private route:Router){}

  userName=""
  password=""

  readValue=()=>{
    let data:any={
      "userName":this.userName,
      "password":this.password
    }
    console.log(data)
    if (this.userName=="admin" && this.password=="12345") {
      alert("valid login")
      this.route.navigate(['/viewAllComplaint'])

      
    } else {
      alert("Invalid login")
      
    }
  }

}
