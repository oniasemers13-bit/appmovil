import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { MenuController, IonHeader, IonToolbar, IonButtons,
         IonMenuButton, IonTitle, IonContent, IonList,
         IonItem, IonIcon } from '@ionic/angular/standalone';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonButtons, IonMenuButton,
    IonTitle, IonContent, IonList, IonItem, IonIcon,
    AsyncPipe, NgFor, RouterLink
  ],
})
export class InicioPage implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(
    private menuCtrl: MenuController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu() {
    this.menuCtrl.open('first');
  }
}