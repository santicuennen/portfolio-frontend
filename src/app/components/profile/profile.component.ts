import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  myPortfolio: any;
  constructor(private datosPersons: PersonService) {}

  ngOnInit(): void {
    this.datosPersons.getPerson().subscribe((data) => {
      this.myPortfolio = data;
    });
  }
}
