import { Component, OnInit } from '@angular/core';
import { gender } from '../models/gender';
import { genders } from '../models/mock-data';
import { userprofile } from '../models/userprofile';
import { WcAPIServiceService } from '../wc-apiservice.service';
import { NavController, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

  radioSel:any;
  radioSelected:string;                       
  selectedGender:string;
  itemsList: gender[] = genders;
  email : String;
  firstname : String;
  lastname : String;

 
  constructor(private apiService : WcAPIServiceService,
            private navController : NavController,
            private router: Router,
            private toastCtrl: ToastController
    ) { 

    }

  ngOnInit() {
  }

  onItemChange(selectedgender : gender){
    this.selectedGender = selectedgender.value;
    console.log(selectedgender);
  }

  async presentToast(msg : string,timeDuration : number) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: timeDuration,
      position:"bottom"
    });
    toast.present();
  }

  createProfile(){
    let profiledata : userprofile;
    profiledata = new userprofile();
    profiledata.email = this.email;
    profiledata.firstName = this.firstname;
    profiledata.lastName = this.lastname;
    profiledata.gender = this.selectedGender;

    console.log(JSON.stringify(profiledata));
    this.apiService.createProfile(profiledata).subscribe(
      data => {
        this.presentToast("Profile created successfully",1500);
        this.navController.navigateRoot('/login');
      },
      error => {
        //this.presentToast("Failed creating the profile",3000);
      }
    );
  }
}
