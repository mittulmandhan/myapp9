import { Directive, ElementRef, HostListener } from '@angular/core';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[appHighlight],.appHighlight'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseover') Fn1() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseout') Fn2() {
    this.el.nativeElement.style.backgroundColor = '';
  }
  @HostListener('click') Fn3() {
    alert(this.el.nativeElement.innerHTML);
  }

}
