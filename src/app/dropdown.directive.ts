import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }
  @HostListener('mouseenter') open() {
    this.isOpen = true;
  }
  private isOpen = false;
}
