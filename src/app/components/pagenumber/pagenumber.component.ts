import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-pagenumber',
  templateUrl: './pagenumber.component.html',
  styleUrls: ['./pagenumber.component.scss']
})
export class PagenumberComponent implements OnInit {

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
    this.paginationService.callFirstPage();
  }
  callPreviousPage(): void {
    this.paginationService.getListQuotes(this.paginationService.setPrevPage());
  }

callNextPage(): void {
    this.paginationService.getListQuotes(this.paginationService.setNextPage());
}

}
