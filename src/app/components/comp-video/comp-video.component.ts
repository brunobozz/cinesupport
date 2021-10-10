import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-video',
  templateUrl: './comp-video.component.html',
  styleUrls: ['./comp-video.component.scss'],
})
export class CompVideoComponent {
  @Input() video!: string;
  constructor() {}
}
