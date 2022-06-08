import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skills } from 'src/app/models/Skills';
import { TokenService } from 'src/app/services/auth/token.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  roles: string[] | any;
  isAdmin = false;
  isLogged = false;

  constructor(
    private datosPortfolio: SkillsService,
    private tokenService: TokenService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}

  mySkills: any;
  closeResult: string | undefined;
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
    this.datosPortfolio.getSkills().subscribe((data) => {
      this.mySkills = data;
      this.editForm = this.fb.group({
        id: [0],
        title: [''],
        urlImg: [''],
        num: [0],
      });
    });
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol: string) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
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
  openEdit(contentEdit: any, skill: Skills) {
    this.modalService.open(contentEdit);
    this.editForm.patchValue({
      id: skill.id,
      title: skill.title,
      urlImg: skill.urlImg,
      num: skill.num,
    });
  }

  onSave(editForm: FormGroup) {
    this.datosPortfolio.editSkill(editForm).subscribe((r) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }
  onSubmit(f: NgForm) {
    this.datosPortfolio.addSkill(f).subscribe((r) => {
      this.ngOnInit();
    });
  }

  onDelete(skill: any) {
    this.datosPortfolio.onDeleteSkill(skill).subscribe(() => {
      this.mySkills = this.mySkills.filter((e: any) => e.id !== skill.id);
    });
  }
}
