import { Component,EventEmitter,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css']
})
export class ProfessionComponent implements OnInit {
  @Input() title=""
  @Input() onSelectedIndexProfession = new EventEmitter<number>() ;

  selectedprofession(index:number): void{
    this.onSelectedIndexProfession.emit(index);
    console.log('app-professsion>'+index);
  }
  constructor() { }

  ngOnInit(): void {
  }

  

}
