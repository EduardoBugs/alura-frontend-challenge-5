import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [
        FooterComponent,
        FooterLinksComponent,
        FaleConoscoComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    exports: [FooterComponent]
})
export class FooterModule { }
