import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaravillaListComponent } from './maravilla-list/maravilla-list.component';
import { MaravillaService } from './maravilla.service';
import { MaravillaDetailComponent } from './maravilla-detail/maravilla-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MaravillaListComponent, MaravillaDetailComponent],
  providers: [MaravillaService],
  exports: [MaravillaListComponent]
})
export class MaravillaModule { }
