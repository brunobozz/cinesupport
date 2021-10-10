import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-video',
  templateUrl: './comp-video.component.html',
  styleUrls: ['./comp-video.component.scss'],
})
export class CompVideoComponent implements OnInit {
  @Input() video!: string;
  constructor() {}
  height = '240px';
  aspect = 16 / 9;

  ngOnInit(): void {
    this.calculaVideoAltura();
  }

  public calculaVideoAltura() {}
}
