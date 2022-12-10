import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent {

  complaint=""
  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any={
      
       
        "userId" : localStorage.getItem("userId"),
        "complaints" :this.complaint
    }
    this.api.addComplaint(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Complaint filed successfully")
          this.complaint=""
          
        } else {
          alert("something went wrong")
          
        }

      }
    )
  }

}
