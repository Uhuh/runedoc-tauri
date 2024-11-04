import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { invoke } from '@tauri-apps/api/core';
import { FormsModule } from '@angular/forms';
import { queuePacket } from '../../../icp-events/events';

@Component({
  selector: 'app-silhouette-controller',
  standalone: true,
  imports: [SliderModule, ButtonModule, FormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './silhouette-controller.component.html',
  styleUrl: './silhouette-controller.component.css'
})
export class SilhouetteControllerComponent {
  red: number = 1045353216;
  green: number = 1045353216;
  blue: number = 1045353216;

  async applySilhouette() {
    queuePacket("cmd", "red", this.red.toString());
    queuePacket("cmd", "green", this.green.toString());
    queuePacket("cmd", "blue", this.blue.toString());
  }
}