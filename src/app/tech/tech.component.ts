import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  @Input() competence : any 

  constructor() { }

  ngOnInit(): void {
  }

  getColor() {
    if (this.competence.niveau >= 0 && this.competence.niveau < 50){
      return "red"
    }
    else if (this.competence.niveau >= 50 && this.competence.niveau < 70){
      return "yellow"
    }
    else if (this.competence.niveau >= 70 && this.competence.niveau <= 100){
      return "green"
    }

    return "red"
  }


  getNiveau(){
    if (this.competence.niveau >= 0 && this.competence.niveau <= 100){
      return this.competence.niveau 
    }

    return 0
  }
}
