import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class MaterialModule { }
