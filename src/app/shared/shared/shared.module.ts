import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from 'src/app/components/item/item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ItemComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports:[
    FormsModule,
    ItemComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
    
  ],

  providers: [],
  bootstrap: []
})
export class SharedModule { }
