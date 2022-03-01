import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  constructor(private datosPortfolio: PortfolioService) {}
  proyectsList: any;
  ngOnInit(): void {
    this.datosPortfolio.getData().subscribe((data) => {
      this.proyectsList = data.proyects;
    });
  }
}
