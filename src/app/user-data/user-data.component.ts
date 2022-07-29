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
    nameError: string='name must be at least 5'
    addressError:string='address must be at least 8'

    validateName() {
        if(this.name.length >= 5) {
            this.nameError = '';
        } else {
            this.nameError='name must be at least 5 characters'
        }
    }

    validateAddress() {
        if(this.address.length >= 8) {
            this.addressError = '';
        } else {
            this.addressError='address must be at least 8 characters'
        }
    }
    ngOnInit(): void {
    }
  
    onSubmit() {
      this.checkout.emit(this.name+'-'+this.address);
    }
}
