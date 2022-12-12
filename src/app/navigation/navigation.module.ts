import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

const sharedNavigation = [
   HeaderComponent,
   FooterComponent
]

@NgModule({
   declarations: [
      ...sharedNavigation
   ],
   imports: [
      CommonModule
   ],
   providers: [

   ],
   exports: [
      ...sharedNavigation
   ]
})
export class Navigationmodule { }