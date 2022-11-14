import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-first-com',
  templateUrl: './first-com.component.html',
  styleUrls: ['./first-com.component.css']
})
export class FirstComComponent implements OnInit {
name:any;
email:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

 

  getData():void{

    this.name = new FormControl('Md karimul');
    this.email = new FormControl('7mdkarimul@gmail.com');
  }


}
