import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

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

  }

}
