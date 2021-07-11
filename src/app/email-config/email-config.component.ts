import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-config',
  templateUrl: './email-config.component.html',
  styleUrls: ['./email-config.component.css']
})
export class EmailConfigComponent implements OnInit {

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
  constructor() { }
  
  ngOnInit() {
  }

}
