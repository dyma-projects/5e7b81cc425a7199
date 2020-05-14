import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({ selector: "[changeColor]" })
export class ChangeColorDirective {
  public colors: {};
  constructor(private el: ElementRef) {
    this.colors = {
      37: "orange",
      38: "red",
      39: "green",
      40: "yellow",
    };
  }
  @HostListener("window:keydown", ["$event"]) windowClick($event) {
    const num = $event.keyCode;
    this.changeColor(this.colors[num]);
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
