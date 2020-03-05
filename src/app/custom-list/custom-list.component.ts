import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit {
  // Names array to hold the values when the add customer button is clicked
  names:any = [];
  name:any;
  constructor() { }

  ngOnInit() {
  }
  /*
  Function to display the names
  */
  public onDisplay(event) {
    var target = event.target;
    var name = target.value;
    if(name) {
      this.names.push(name); //Add the name to the names array
    }
    this.name = '';
  }
  /*
  Function to delete the names
  */
  public deleteName(name:any) {
    let index = this.names.indexOf(name);
    if(index > -1)
    this.names.splice(index,1); //Remove the name from the names array
  }
}
