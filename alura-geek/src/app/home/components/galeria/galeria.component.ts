import { Component, Input, OnInit } from '@angular/core';
import { Galeria } from '@types';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
  @Input() galeria: Galeria = {};

  constructor() {}

  ngOnInit(): void {}
}
