import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      icon: '',
      field: '',
      fieldText: ''
    },
    {
      icon: '',
      field: '',
      fieldText: ''
    },
    {
      icon: '',
      field: '',
      fieldText: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
