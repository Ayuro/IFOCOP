import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() appClickOutside = new EventEmitter<EventTarget>();

  constructor(private el: ElementRef<HTMLElement>) {}

  /**
   * On écoute tous les clics sur le document, puis on vérifie si l'élément
   * portant la directive contient l'élément cliqué.
   * Si ce n'est pas le cas, on émet un événement indiquant que le clic a eu
   * lieu en dehors de l'élément.
   */
  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement) {
    const clickedInside = this.el.nativeElement.contains(target);
    if (!clickedInside) {
      this.appClickOutside.emit(target);
    }
  }
}
