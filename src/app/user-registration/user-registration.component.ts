import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  constructor(private api:ApiService){}

  name=""
  phoneNo=""
  address=""
  email=""
  userName=""
  password=""

  readValue=()=>{
    let data:any={
      "name":this.name,
      "phoneNo":this.phoneNo,
      "address":this.address,
      "email":this.email,
      "userName":this.userName,
      "password":this.password
    }
    console.log(data)
    this.api.registration(data).subscribe(
      (response)=>{
        console.log(response)
        if(response == "success"){
          alert("Registration Successful")
        }
        else{
          alert("Something has went wrong")
        }
      }
    )

  }

}
