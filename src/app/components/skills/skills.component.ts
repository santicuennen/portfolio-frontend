import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor(private datosPortfolio: PortfolioService) {}
  mySkills: any;
  ngOnInit(): void {
    this.datosPortfolio.getData().subscribe((data) => {
      this.mySkills = data.skills;
    });
  }
}
