import { Component, OnInit, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { OcInfraModule, NavigationService, ErrorHandling } from '@diaas/ux-web';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
  
  userName: any;
  passWord: any;
  constructor(@Inject(DOCUMENT) private document: Document,private renderer: Renderer2,private dialog: MatDialog) { }

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
      let dialogRef = this.dialog.open(MessageComponent);
      dialogRef.afterClosed().subscribe(result => {
       
      })
     
    }
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'testback');
  }

}
