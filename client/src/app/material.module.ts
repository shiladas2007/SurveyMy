// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: material modules used in the app

import { NgModule } from "@angular/core";
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule, MatSelectModule,
    MatNativeDateModule, MatCardModule,
    MatInputModule, MatRadioModule,
    BrowserAnimationsModule, MatStepperModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule, MatSelectModule,
    MatNativeDateModule, MatCardModule,
    MatInputModule, MatRadioModule,
    BrowserAnimationsModule, MatStepperModule
  ],
  providers: [MatDatepickerModule]
})
export class MaterialModule {}
