import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

@NgModule({
    declarations: [
        FooterComponent,
        FooterLinksComponent,
        FaleConoscoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [FooterComponent]
})
export class FooterModule { }
