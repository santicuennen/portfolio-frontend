import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/models/Person';
import { TokenService } from 'src/app/services/auth/token.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  roles: string[] | any;
  isAdmin = false;

  constructor(
    private datosPortfolio: PersonService,
    private tokenService: TokenService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}
  myPortfolio: any;
  editForm: any | FormGroup;
  ngOnInit(): void {
    this.datosPortfolio.getPerson().subscribe((data) => {
      this.myPortfolio = data;
    });
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol: any) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.editForm = this.fb.group({
      id: [0],
      name: [''],
      lastname: [''],
      email: [''],
      password: [''],
      about: [''],
      aboutMe: [''],
      urlImg: [''],
      country: [''],
      location: [''],
      urlBanner: [''],
    });
  }
  openEdit(contentEdit: any, person: Person) {
    this.modalService.open(contentEdit);
    this.editForm.patchValue({
      id: person.id,
      name: person.name,
      lastname: person.lastname,
      email: person.email,
      password: person.password,
      about: person.about,
      aboutMe: person.aboutMe,
      country: person.country,
      location: person.location,
    });
  }
  onSave(editForm: FormGroup) {
    this.datosPortfolio.patchPerson(editForm).subscribe((r) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }
}
