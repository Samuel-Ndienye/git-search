import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) {
 }
 @HostListener('mouseenter') onMouseEnter() {
  this.changeColor('yellow');

}
  changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

@HostListener('mouseleave') onMouseLeave() {
  this.changeColor('');

}

private highlight(color: string) {
  
}

}