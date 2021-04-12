import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'section-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerData: any;
  headerLinks = [];
  menuClass = '';
  headerImage = '';
  errSpinner = false;

  constructor(private data: HeaderService) { }

  ngOnInit(): void {
    this.errSpinner = false;
    this.headerData = this.data.getHeader()
      .subscribe( resdata => {
        this.headerData = resdata;
        this.headerLinks = this.headerData.header.links;
        this.menuClass = this.headerData.header.class;
        this.headerImage = this.headerData.header.brand_image_url;
      }, error => {
        console.log(error.message)
        this.errSpinner = true;
      });
  }

}
