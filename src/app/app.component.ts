import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // Properties
  metrics = [
    { name: 'Length', units: ['Meter', 'Kilometer', 'Centimeter'] },
    { name: 'Weight', units: ['Kilogram', 'Gram', 'Pound'] },
  ];
  availableUnits: string[] = [];
  selectedMetric: any;
  fromUnit: string = '';
  toUnit: string = '';
  inputValue: number | null = null;
  result: number | null = null;

  // Event Handlers
  onMetricChange(event: any) {
    this.selectedMetric = event.detail.value;
    this.availableUnits = this.selectedMetric.units;
  }

  convert() {
    if (this.inputValue !== null && this.fromUnit && this.toUnit) {
      // Example conversion logic (adjust based on actual logic)
      if (this.fromUnit === this.toUnit) {
        this.result = this.inputValue;
      } else {
        // Example: if you need to add conversion logic
        this.result = this.inputValue * 1.5; // Placeholder for actual conversion logic
      }
    }
  }

  isNaN(value: any): boolean {
    return isNaN(value);
  }
}
