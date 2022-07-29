import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

    constructor() { }

    @Output() checkout: EventEmitter<string> = new EventEmitter();
  
    name: string = '';
    address: string ='';
  
    ngOnInit(): void {
    }
  
    onSubmit() {
      this.checkout.emit(this.name+'-'+this.address);
    }
}
