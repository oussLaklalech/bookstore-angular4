import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class UpperCaseDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style['text-transform'] = 'uppercase';
  }

}
