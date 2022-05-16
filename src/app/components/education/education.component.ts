import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/Education';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  closeResult: string | undefined;
  educationList: any;

  constructor(
    private datosPortfolio: EducationService,
    private modalService: NgbModal
  ) {}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {
    this.datosPortfolio.getEdus().subscribe((data) => {
      this.educationList = data;
    });
  }

  onDelete(degree: Education) {
    this.datosPortfolio.onDeleteEdu(degree).subscribe(() => {
      this.educationList = this.educationList.filter(
        (e: any) => e.id !== degree.id
      );
    });
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
}
