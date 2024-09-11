import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "../components/button/button.component";
import {ClueDirective} from "../../directives/clue.directive";


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    ClueDirective
  ],
  exports: [ButtonComponent],
})
export class SharedModule { }
