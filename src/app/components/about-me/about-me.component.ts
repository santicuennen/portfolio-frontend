import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/models/Person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  constructor(
    private datosPortfolio: PersonService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}
  myPortfolio: any;
  editForm: any | FormGroup;
  ngOnInit(): void {
    this.datosPortfolio.getPerson().subscribe((data) => {
      this.myPortfolio = data;
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
      urlImg: person.urlImg,
      country: person.country,
      location: person.location,
      urlBanner: person.urlBanner,
    });
  }
  onSave(editForm: FormGroup) {
    this.datosPortfolio.patchPerson(editForm).subscribe((r) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }
}
