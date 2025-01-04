import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent {
  // Datos de ejemplo para activityBlocks
  activityBlocks = [
    { free: true, time: '10:00 AM', activity: 'Yoga', monitors: 'John Doe' },
    { free: false, time: '12:00 PM', activity: 'Pilates', monitors: 'Jane Smith' },
  ];

  // Métodos requeridos
  addActivity(block: any) {
    console.log('Adding activity:', block);
  }

  editActivity(block: any) {
    console.log('Editing activity:', block);
  }

  deleteActivity(block: any) {
    console.log('Deleting activity:', block);
  }
}
