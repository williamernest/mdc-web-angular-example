import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit} from "@angular/core";
import {MDCRipple} from "@material/ripple";

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements AfterViewInit, OnDestroy {

  ripple: MDCRipple;

  constructor(public myElement: ElementRef) { }

  ngAfterViewInit() {
    this.ripple = new MDCRipple(this.myElement.nativeElement.querySelector('.mdc-button'));
  }

  ngOnDestroy() {
    if (this.ripple) {
      this.ripple.destroy();
      this.ripple = null;
    }
  }

}
