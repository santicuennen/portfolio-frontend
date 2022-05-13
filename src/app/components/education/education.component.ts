import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/Education';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: any;

  // @Output() onDeleteEdu: EventEmitter<Education> = new EventEmitter();

  constructor(private datosPortfolio: EducationService) {}
  ngOnInit(): void {
    this.datosPortfolio.getEdus().subscribe((data) => {
      this.educationList = data;
    });
  }

  onDelete(degree: any) {
    this.datosPortfolio.onDeleteEdu(degree).subscribe(() => {
      this.educationList = this.educationList.filter(
        (e: any) => e.id !== degree.id
      );
    });
  }
}
