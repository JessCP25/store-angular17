import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {

  element = inject(ElementRef);

  constructor() { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = "gray";
  }

}
