import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  constructor(private datosPortfolio: PersonService) {}
  myPortfolio: any;
  ngOnInit(): void {
    this.datosPortfolio.getPerson().subscribe((data) => {
      this.myPortfolio = data;
    });
  }
}
