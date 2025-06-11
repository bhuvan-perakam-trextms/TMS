import { Component } from '@angular/core';

interface InterestRateSwap {
  id: number;
  counterparty: string;
  notional: number;
  fixedRate: number;
  floatingRate: string;
  startDate: Date;
  endDate: Date;
  notes?: string;
}

@Component({
  selector: 'app-interest-rate-swaps',
  templateUrl: './interest-rate-swaps.component.html',
  styleUrls: ['./interest-rate-swaps.component.scss']
})
export class InterestRateSwapsComponent {
  swaps: InterestRateSwap[] = [
    {
      id: 1,
      counterparty: 'HSBC',
      notional: 1000000,
      fixedRate: 2.5,
      floatingRate: 'SOFR + 0.5%',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2027-01-01'),
      notes: '3-year swap'
    },
    {
      id: 2,
      counterparty: 'Barclays',
      notional: 2000000,
      fixedRate: 2.8,
      floatingRate: 'SOFR + 0.7%',
      startDate: new Date('2024-06-01'),
      endDate: new Date('2029-06-01'),
      notes: '5-year swap'
    }
  ];

  showCalculator = false;
  selectedSwap: InterestRateSwap | null = null;

  yearRows: any[] = [];
  expandedYears: Set<number> = new Set();

  openCalculator(swap: InterestRateSwap) {
    this.selectedSwap = swap;
    this.showCalculator = true;
    this.generateYearRows();
  }

  closeCalculator() {
    this.showCalculator = false;
    this.selectedSwap = null;
    this.yearRows = [];
    this.expandedYears.clear();
  }

  generateYearRows() {
    if (!this.selectedSwap) return;
    const start = this.selectedSwap.startDate;
    const end = this.selectedSwap.endDate;
    const years = end.getFullYear() - start.getFullYear() + 1;
    const rows = [];
    let opening = this.selectedSwap.notional;
    for (let i = 0; i < years; i++) {
      const year = start.getFullYear() + i;
      // Example: fixed interest paid per year
      const interestPaid = opening * (this.selectedSwap.fixedRate / 100);
      const closing = opening; // Notional typically unchanged for plain vanilla IRS
      rows.push({
        year,
        opening,
        interestPaid,
        closing,
        months: this.generateMonthRows(year, opening, this.selectedSwap.fixedRate),
      });
      opening = closing;
    }
    this.yearRows = rows;
  }

  generateMonthRows(year: number, notional: number, fixedRate: number) {
    const months = [];
    for (let m = 0; m < 12; m++) {
      const monthName = new Date(year, m).toLocaleString('default', { month: 'long' });
      const interest = notional * (fixedRate / 100) / 12;
      months.push({
        month: monthName,
        interest: interest,
        notional: notional
      });
    }
    return months;
  }

  toggleYear(year: number) {
    if (this.expandedYears.has(year)) {
      this.expandedYears.delete(year);
    } else {
      this.expandedYears.add(year);
    }
  }

  isYearExpanded(year: number) {
    return this.expandedYears.has(year);
  }
} 