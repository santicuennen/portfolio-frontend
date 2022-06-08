import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/Education';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  roles: string[] | any;
  isAdmin = false;
  constructor(
    private datosPortfolio: EducationService,
    private tokenService: TokenService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}

  closeResult: string | undefined;
  educationList: any;
  editForm: any | FormGroup;

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
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol: any) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.editForm = this.fb.group({
      id: [0],
      title: [''],
      type: [''],
      institution: [''],
      startDate: [''],
      endDate: [''],
    });
  }
  openEdit(contentEdit: any, education: Education) {
    this.modalService.open(contentEdit);
    this.editForm.patchValue({
      id: education.id,
      title: education.title,
      type: education.type,
      institution: education.institution,
      startDate: education.startDate,
      endDate: education.endDate,
    });
  }
  onSave(editForm: FormGroup) {
    this.datosPortfolio.editEdu(editForm).subscribe((r) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }

  onDelete(degree: Education) {
    this.datosPortfolio.onDeleteEdu(degree).subscribe(() => {
      this.educationList = this.educationList.filter(
        (e: any) => e.id !== degree.id
      );
    });
  }

  openAdd(content: any) {
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

  onSubmit(f: NgForm) {
    this.datosPortfolio.addEdu(f).subscribe((r) => {
      this.ngOnInit();
    });
  }
}
