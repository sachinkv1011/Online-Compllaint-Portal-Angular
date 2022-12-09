import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

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
      
    } else {
      alert("Invalid login")
      
    }
  }

}
