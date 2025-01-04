import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monitors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss'],
})
export class MonitorsComponent {
  // Datos de ejemplo para monitors
  monitors = [
    { name: 'Monitor 1', email: 'monitor1@example.com', phone: '123456789' },
    { name: 'Monitor 2', email: 'monitor2@example.com', phone: '987654321' },
  ];

  // Métodos requeridos
  addMonitor() {
    console.log('Adding monitor');
  }

  editMonitor(monitor: any) {
    console.log('Editing monitor:', monitor);
  }

  deleteMonitor(monitor: any) {
    console.log('Deleting monitor:', monitor);
  }
}
