import { Component, OnInit } from '@angular/core';
import { OcInfraModule, NavigationService, ErrorHandling } from '@diaas/ux-web';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: any;
  passWord: any;
  constructor() { }

  ngOnInit() {
  }
  login():void{
    if(this.userName==='agent@csc.com'&& this.passWord==='agent'){
      OcInfraModule.AppInjector.get(NavigationService).navigateTo("screen/dashboard");
      console.log("thanh");
    }
    else {
      console.log("hhuhuhhu")
     
    }
  }

}
