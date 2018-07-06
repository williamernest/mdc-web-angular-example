import {AfterViewInit, Component, ElementRef, OnDestroy} from "@angular/core";
import { MDCTopAppBar } from '@material/top-app-bar';

@Component({
  selector: 'app-custom-top-app-bar',
  templateUrl: './custom-top-app-bar.component.html',
  styleUrls: ['./custom-top-app-bar.component.scss']
})
export class CustomTopAppBarComponent implements AfterViewInit, OnDestroy {

  component: MDCTopAppBar;

  constructor(public myElement: ElementRef) { }

  ngAfterViewInit(): void {
    this.component = new MDCTopAppBar(this.myElement.nativeElement);
  }

  ngOnDestroy(): void {
    this.component.destroy();
  }


}
