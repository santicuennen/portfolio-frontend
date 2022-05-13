import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor(private datosPortfolio: SkillsService) {}
  mySkills: any;
  ngOnInit(): void {
    this.datosPortfolio.getSkills().subscribe((data) => {
      this.mySkills = data;
    });
  }

  onDelete(skill: any) {
    this.datosPortfolio.onDeleteSkill(skill).subscribe(() => {
      this.mySkills = this.mySkills.filter((e: any) => e.id !== skill.id);
    });
  }
}
