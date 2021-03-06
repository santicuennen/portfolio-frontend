import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { ProfilePic } from 'src/app/models/ProfilePic';
import { TokenService } from 'src/app/services/auth/token.service';
import { PersonService } from 'src/app/services/person.service';
import { ProfiePicService } from 'src/app/services/profie-pic.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  roles: string[] | any;
  isAdmin = false;
  editForm: any | FormGroup;
  picture: any | ProfilePic;
  myPortfolio: any | Person;
  file: any[] = [];
  onloadProfile: any = false;
  onloadBanner: any = false;
  loading: string =
    'https://firebasestorage.googleapis.com/v0/b/cuenca-penen-portfolio-hosting.appspot.com/o/users%2Fprofile-pic%2Fprofile_1653498494141?alt=media&token=c4215758-8d2c-4430-9691-48613eedb51c';
  constructor(
    private datosPortfolio: PersonService,
    private tokenService: TokenService,
    private picservice: ProfiePicService,
    private fb: FormBuilder
  ) {}

  //variables
  //functions
  ngOnInit(): void {
    this.picservice.getPicture().subscribe((pic) => (this.picture = pic));
    this.datosPortfolio
      .getPerson()
      .subscribe((data) => (this.myPortfolio = data));

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol: any) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

    this.editForm = this.fb.group({
      id: 0,
      picUrl: '',
      urlBanner: '',
      person_id: 1,
    });
  }

  onCaptureProfile(event: any, picture: ProfilePic) {
    const name = 'profile';
    const newFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(newFile);
    reader.onloadstart = () => {
      this.onloadProfile = true;
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
            person_id: this.picture.person_id,
          });
          this.picservice
            .putPicture(this.editForm)
            .subscribe((r) => this.ngOnInit());
          this.onloadProfile = false;
        });
    };
  }
  onCaptureBanner(event: any, picture: ProfilePic) {
    const name = 'banner';
    const newFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(newFile);
    reader.onloadstart = () => {
      this.onloadBanner = true;
    };
    reader.onloadend = () => {
      this.file.push(reader.result);
      this.picservice
        .uploadPicture(`${name}_${Date.now()}`, reader.result)
        .then((bannerUrl) => {
          console.log('Uploading photo');
          console.log(bannerUrl);

          this.editForm.patchValue({
            id: 1,
            picUrl: this.picture.picUrl,
            urlBanner: bannerUrl,
            person_id: this.picture.person_id,
          });
          this.picservice
            .putPicture(this.editForm)
            .subscribe((r) => this.ngOnInit());
          this.onloadBanner = false;
        });
    };
  }
}
