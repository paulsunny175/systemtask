import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'systemtask';

  secondStatus = [];
  servers = [
    {
      pincode: '506001',
      name: 'welcome to maharashtra',
      status: 'maharashtra',
    },
    {
      pincode: '50600546',
      name: 'welcome to delhi',
      status: 'delhi',
    },
    {
      pincode: '506001646',
      name: 'welcome to mumbai',
      status: 'mumbai',
    },
    {
      pincode: '46465353',
      name: 'welcome to telangana',
      status: 'telangana',
    }
  ];
  
  getCityDedails(server , index){
  // console.log("event", server);
  // console.log("status", this.servers);
  let i = 0;
  this.secondStatus = [];
  this.servers.map(val=>{
    if(server.status==val.status){
      this.secondStatus.push(this.servers[i]);
    }
    i++;
  })
  }
}

 