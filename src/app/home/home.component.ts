import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any;
  caroSection = [];
  articleTitle = '';
  articleBody = '';

  constructor(private data: HomeService) { }

  ngOnInit(): void {
    this.homeData =this. data.getHome()
      .subscribe(resdata => {
        this.homeData = resdata;
        this.caroSection = this.homeData.page.sections[0].contents;
        this.articleTitle = this.homeData.page.sections[1].contents[0].title;
        this.articleBody = this.homeData.page.sections[1].contents[0].body;
      });
  }


}
