import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[clickable]'
})
export class ClickableDirective {

  constructor(
    private readonly _elementRef: ElementRef
  ) {
    _elementRef.nativeElement.style.cursor = 'pointer';
  }

}
