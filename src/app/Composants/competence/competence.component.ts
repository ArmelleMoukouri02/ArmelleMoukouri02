import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  constructor() { }
  
  competences : any[] = [

    { 
      titre : "Developpement front-end", 
      technologie: "HTML5, SASS, VueJS, Angular, JavaFx,..",
      niveau:90
    },

    { 
      titre : "Developpement back-end", 
      technologie: "NodeJS, Drupal 8, Laravel, Kotlin, Java EE 7",
      niveau:80
    },

    { 
      titre : "Developpement mobile", 
      technologie: "Android Kotlin, IOS Swift, Cordova, Flutter",
      niveau:70
    },

    { 
      titre : "UI / UX Designer", 
      technologie: "Photoshop CC, Adobe XD, Material Design",
      niveau:80
    },

    { 
      titre : "Base de données & Big Data", 
      technologie: "Oracle 11g, PostgreSQL, Hadoop, Talend DI",
      niveau:30
    },

    { 
      titre : "Outils / Environnements", 
      technologie: "Visual Paradigm, Git, Docker, K8s, Linux",
      niveau:80
    },

  ]

  ngOnInit(): void {
  }

}
