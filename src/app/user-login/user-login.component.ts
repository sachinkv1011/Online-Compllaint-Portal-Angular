import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  userName=""
  password=""

  readValue=()=>{
    let data:any={
      "userName":this.userName,
      "password":this.password
    }
    console.log(data)
  }
}
