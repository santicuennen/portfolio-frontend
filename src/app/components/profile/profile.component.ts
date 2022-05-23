import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/models/Person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private datosPortfolio: PersonService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) {}

  //variables

  myPortfolio: any;
  editForm: any | FormGroup;
  public imgFiles: any = [];
  public previs: string | any;
  //functions

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
  captureFile(event: any) {
    const capturedFile = event.target.files[0];
    this.extraerBase64(capturedFile).then((file: any) => {
      this.previs = file.base;
    });
    this.imgFiles.push(capturedFile);
  }
  uploadFile(): any {
    try {
      const dataForm = new FormData();
      this.imgFiles.forEach((file: any) => {
        console.log(file);
        dataForm.append('files', file);
      });
      this.datosPortfolio.patchPerson(this.imgFiles).subscribe((r) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
    } catch (e) {
      console.log(e);
    }
  }

  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject): any => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (e) {
        return null;
      }
    });
}
