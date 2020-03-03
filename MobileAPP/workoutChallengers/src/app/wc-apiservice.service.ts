import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse ,HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { userprofile } from './models/userprofile';
import { NavController, ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WcAPIServiceService {

  public httpOptions: any;
  servername : string;

  constructor(private http: HttpClient,private toastCtrl: ToastController) { }

  async presentToast(msg : string,timeDuration : number) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: timeDuration,
      position:"bottom"
    });
    toast.present();
  }

  private getBaseURL(): string {
    let baseURL : string;
    this.servername = localStorage.getItem("ServerName");
    baseURL = 'https://' + this.servername + ':8080'
    return baseURL;
  }

  public authenticate(username : string,password : string) : Observable<any>{

    let payload = {};
    payload['username'] = username;
    payload['password'] = password;

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept':'application/json',
        //'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin': 'origin-list',
        'Access-Control-Allow-Methods' : 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      })
    };

    try{
      return this.http.post(this.getBaseURL() + '/api/auth/userpass',
        JSON.stringify(payload),this.httpOptions);
    }
    catch(err){
      console.log(err);
    }
    

    // return this.http.post('/api/auth/userpass',
    //     JSON.stringify(payload),this.httpOptions);
  }

  public createProfile(profile: userprofile) : Observable<any>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept':'application/json',
        //'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin': 'origin-list',
        'Access-Control-Allow-Methods' : 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      })
    };
    this.presentToast(this.getBaseURL(),2000);
    return this.http.post(this.getBaseURL() + '/api/user/create',
        JSON.stringify(profile),this.httpOptions);

    // return this.http.post('/api/user/create',
    //     JSON.stringify(profile),this.httpOptions);
  }
}
