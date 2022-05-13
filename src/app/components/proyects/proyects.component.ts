import { Component, OnInit } from '@angular/core';
import { Proyects } from 'src/app/models/Proyects';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  constructor(private datosPortfolio: ProyectsService) {}
  proyectsList: any;
  ngOnInit(): void {
    this.datosPortfolio.getProyects().subscribe((data) => {
      this.proyectsList = data;
    });
  }
  onDelete(proyect: any) {
    this.datosPortfolio.onDeleteProyect(proyect).subscribe(() => {
      this.proyectsList = this.proyectsList.filter(
        (e: any) => e.id !== proyect.id
      );
    });
  }
}
