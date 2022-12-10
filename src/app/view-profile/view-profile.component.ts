import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  userinfo:any=""
  constructor(private api:ApiService){
  this.userinfo=localStorage.getItem("userId")
  let datas:any={
    "id":this.userinfo
  }
  this.api.userProfile(datas).subscribe(
    (response:any)=>{
      console.log(response)
      this.data=response
    }
  )

  }

  data:any={}

}
