import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  constructor(private datosPortfolio: PortfolioService) {}
  myPortfolio: any;
  ngOnInit(): void {
    this.datosPortfolio.getData().subscribe((data) => {
      this.myPortfolio = data;
    });
  }
}
