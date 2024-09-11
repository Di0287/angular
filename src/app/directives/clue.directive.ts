import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClue]',
  standalone: true
})
export class ClueDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addClue();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.removeClue();
  }

  private addClue() {
    this.renderer.addClass(this.el.nativeElement, 'toClue');
  }

  private removeClue() {
    console.log('clue')
    this.renderer.removeClass(this.el.nativeElement, 'toClue');
  }
}
