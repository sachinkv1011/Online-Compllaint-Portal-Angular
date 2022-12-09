import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private api:ApiService,private route:Router){}

  userName=""
  password=""

  readValue=()=>{
    let data:any={
      "userName":this.userName,
      "password":this.password
    }
    console.log(data)
    this.api.userLogin(data).subscribe(
      (response:any)=>{
        let userId=response.userid;
        console.log(userId)
        localStorage.setItem("userId",userId)
        this.route.navigate(['/userprofile'])
      }
    )
  }
}
