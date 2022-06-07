import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { ProfilePic } from 'src/app/models/ProfilePic';
import { PersonService } from 'src/app/services/person.service';
import { ProfiePicService } from 'src/app/services/profie-pic.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private datosPortfolio: PersonService,
    private picservice: ProfiePicService,
    private fb: FormBuilder
  ) {}

  //variables
  editForm: any | FormGroup;
  picture: any | ProfilePic;
  myPortfolio: any | Person;
  file: any[] = [];
  onload: any = false;
  loading: string =
    'https://firebasestorage.googleapis.com/v0/b/cuenca-penen-portfolio-hosting.appspot.com/o/users%2Fprofile-pic%2Fprofile_1653498494141?alt=media&token=c4215758-8d2c-4430-9691-48613eedb51c';
  //functions
  ngOnInit(): void {
    this.picservice.getPicture().subscribe((pic) => (this.picture = pic));
    this.datosPortfolio
      .getPerson()
      .subscribe((data) => (this.myPortfolio = data));
    this.editForm = this.fb.group({
      id: [0],
      picUrl: [''],
    });
  }

  onCapture(event: any, picture: ProfilePic) {
    const name = 'profile';
    const newFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(newFile);
    reader.onloadstart = () => {
      this.onload = true;
    };
    reader.onloadend = () => {
      this.file.push(reader.result);
      this.picservice
        .uploadPicture(`${name}_${Date.now()}`, reader.result)
        .then((imgUrl) => {
          console.log('Uploading photo');
          console.log(imgUrl);

          this.editForm.patchValue({
            id: 1,
            picUrl: imgUrl,
            urlBanner: this.picture.urlBanner,
            person_id: 1,
          });
          this.picservice
            .putPicture(this.editForm)
            .subscribe((r) => this.ngOnInit());
          this.onload = false;
        });
    };
  }
}
