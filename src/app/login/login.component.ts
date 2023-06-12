import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { GoogleAuthService } from '../google-auth.service';
interface GoogleUser {
  getAuthResponse(): { id_token: string };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

   constructor() {}
    
   ngOnInit(): void {
    
  }
  loginForm=new FormGroup({

    email: new FormControl('',[Validators.required,Validators.email]),
    pwd:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
    ])
    
  });
  // onGoogleSignIn(): void {
  //   this.googleAuthService.signInWithGoogle().then((googleUser: gapi.auth2.GoogleUser) => {
  //     const idToken = googleUser.getAuthResponse().id_token;
  //     // Call your backend API here and send the idToken
  //     this.sendTokenToBackend(idToken);
  //   }).catch((error: any) => {
  //     console.error('Google Sign-In Error:', error);
  //   });
  // }
  get email() : FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('pwd') as FormControl;;
  }


  private sendTokenToBackend(idToken: string): void {
    
  }
 
  // password: string = '';
  // passwordFieldType: string = 'password';

  // togglePasswordVisibility() {
  //   this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  // }

  login()
{
  
}
}

