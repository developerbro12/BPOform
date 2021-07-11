import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  public  client = [
    {
      name: 'HiRoad'
      , id: 1
    },
    {
      name: 'Client'
      , id: 2
    }
]

public report = [
  {
     name: 'Activity'
     , id: 1
  },
  {
    name: 'Invoice'
    , id: 2
  },
  {
    name: 'Invoice Preview'
    , id: 3
  }
]

  public emailTo = ['sunil@gmail.com', 'polur@gmail.com'];
  public emailCc = ['abc@gmail.com', 'def@gmail.com'];

  public popup = false
  public email;
  
  constructor() { }

  ngOnInit() {
  }
   
  removeItem(type) {
    if(type == 'to') {
      this.emailTo.splice(-1, 1);
    } else if(type == 'cc') {
      this.emailCc.splice(-1, 1);
    }
  }

  AddEmail() {
   
      this.emailTo.push(this.email);
      this.email = '';
      this.popup = false
 
  }

 

}
