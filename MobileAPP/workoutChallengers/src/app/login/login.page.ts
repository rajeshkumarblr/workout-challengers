import { Component, OnInit } from '@angular/core';
import { ParseError } from '@angular/compiler';
import { WcAPIServiceService } from '../wc-apiservice.service';
import { NavController, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
//import { localStorage } from 'angular-local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  lusername: string = "";
  lpassword: string = "";
  servername: string = "";
  login_status: string = "";
  
  constructor(private apiService : WcAPIServiceService,
            private navController : NavController,
            private router: Router,
            private toastCtrl: ToastController
            ) {
              if ((window.localStorage) && 
                  (localStorage.length > 0)){
                this.servername = localStorage.getItem("ServerName");
                  }
              else{
                this.servername = "";
                this.presentToast("No local strorage or \n the server name not present",2000);
              }
  }

  ngOnInit() {
  }

  async presentToast(msg : string,timeDuration : number) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: timeDuration,
      position:"bottom"
    });
    toast.present();
  }

  signIn(){
    console.log(" username : " + this.lusername + " password : " + this.lpassword); ;
    localStorage.setItem("ServerName",this.servername);
    this.apiService.authenticate(this.lusername,this.lpassword).subscribe(
      data => {
        console.log("Post result " , data);
      },
      error => {
        console.log("Error message " , error.error.error);
        this.login_status = error.error.error;
      }

    );
  }

  signUp(){
    console.log(" username : " + this.lusername + " password : " + this.lpassword);
    localStorage.setItem("ServerName",this.servername);
    this.navController.navigateRoot('/signup');
  }

}
