import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todomanager',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodomanagerComponent {
  task: string = '';
  tasks: string[] = [];


  addTask() {
    if (this.task.trim()) {
      this.tasks.push(this.task.trim());
      this.task = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
