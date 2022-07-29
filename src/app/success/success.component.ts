import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }
  name: string | null = '';
  total: number | null = 0;
  address:string | null ='';

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.address = this.route.snapshot.paramMap.get('address');
    this.total = Number(this.route.snapshot.paramMap.get('total'));
  }


}
