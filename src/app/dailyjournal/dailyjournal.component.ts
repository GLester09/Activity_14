import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dailyjournal',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './dailyjournal.component.html',
  styleUrl: './dailyjournal.component.css'
})
export class DailyjournalComponent {
date:string = '';
entry:string='';
journal: {date: string, text: string}[] = [];

saveEntry(){
  const newEntry = {date: this.date, text: this.entry};
  this.journal.push(newEntry);
  this.date = 'Already save';
  this.entry = '';
}
}
