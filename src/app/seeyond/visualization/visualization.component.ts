import { Component, OnInit } from '@angular/core';
import { Feature } from '../feature';

@Component({
  selector: 'seeyond-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  constructor(
    public feature: Feature
  ) { }

ngOnInit() {
    // var syd_v = require( 'syd-visualization' );
    this.feature.syd_v.QT.Visualization.SetCanvasSize(606,602);
  }
}
