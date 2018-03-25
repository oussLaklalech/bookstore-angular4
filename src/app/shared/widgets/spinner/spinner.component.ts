import {Component, OnInit} from '@angular/core';
import {SpinnerService} from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {


  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
  }

  /**
   * Retourne si le Sipnner est caché ou non
   */
  isSpinnerHidden() {
    return this.spinnerService.getSpinnerHidden();
  }
}
