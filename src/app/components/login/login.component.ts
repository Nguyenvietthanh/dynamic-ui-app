import { Component, OnInit, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { OcInfraModule, NavigationService, ErrorHandling } from '@diaas/ux-web';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
  
  userName: any;
  passWord: any;
  constructor(@Inject(DOCUMENT) private document: Document,private renderer: Renderer2,) { }

  ngOnInit() {
    //this.document.body.classList.add('testback');
    this.renderer.addClass(this.document.body, 'testback');
  }
  login():void{
    if(this.userName==='agent@csc.com'&& this.passWord==='agent'){
      OcInfraModule.AppInjector.get(NavigationService).navigateTo("screen/tableMetaModel");
      console.log("thanh");
    }
    else {
      console.log("hhuhuhhu")
     
    }
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'testback');
  }

}
