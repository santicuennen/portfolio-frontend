import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyects } from 'src/app/models/Proyects';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  constructor(
    private datosPortfolio: ProyectsService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}
  proyectsList: any;
  closeResult: string | undefined;
  editForm: any | FormGroup;

  ngOnInit(): void {
    this.datosPortfolio.getProyects().subscribe((data) => {
      this.proyectsList = data;
    });
    this.editForm = this.fb.group({
      id: [0],
      title: [''],
      url: [''],
      yearDate: [0],
      description: [''],
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
  openEdit(contentEdit: any, proyect: Proyects) {
    this.modalService.open(contentEdit);
    this.editForm.patchValue({
      id: proyect.id,
      title: proyect.title,
      url: proyect.url,
      yearDate: proyect.yearDate,
      description: proyect.description,
    });
  }

  onSave(editForm: FormGroup) {
    this.datosPortfolio.editPry(editForm).subscribe((r) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }
  onSubmit(f: NgForm) {
    this.datosPortfolio.addPry(f).subscribe((r) => {
      this.ngOnInit();
    });
  }
  onDelete(proyect: any) {
    this.datosPortfolio.onDeleteProyect(proyect).subscribe(() => {
      this.proyectsList = this.proyectsList.filter(
        (e: any) => e.id !== proyect.id
      );
    });
  }
}
