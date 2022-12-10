import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-view-all-complaints',
  templateUrl: './admin-view-all-complaints.component.html',
  styleUrls: ['./admin-view-all-complaints.component.css']
})
export class AdminViewAllComplaintsComponent {
  
  constructor(private api:ApiService){
    api.viewAllComplaint().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
 data:any=[]

}
