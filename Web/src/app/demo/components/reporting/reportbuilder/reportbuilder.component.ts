import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import Chart, { ChartType, ChartData, ChartOptions } from 'chart.js/auto';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reportbuilder',
  templateUrl: './reportbuilder.component.html',
  styleUrls: ['./reportbuilder.component.scss'],
  providers: [DatePipe]
})
export class ReportbuilderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cashSummaryChart') cashSummaryChartRef!: ElementRef;
  @ViewChild('cashBreakdownChart') cashBreakdownChartRef!: ElementRef;
  @ViewChild('payrollBreakdownChart') payrollBreakdownChartRef!: ElementRef;
  @ViewChild('accountPositionChart') accountPositionChartRef!: ElementRef;
  @ViewChild('currencyBreakdownChart') currencyBreakdownChartRef!: ElementRef;
  @ViewChild('counterpartyChart') counterpartyChartRef!: ElementRef;
  @ViewChild('holdingsChart') holdingsChartRef!: ElementRef;
  @ViewChild('topCustomersChart') topCustomersChartRef!: ElementRef;
  @ViewChild('expandedChart') expandedChartRef!: ElementRef;

  cashSummaryChart!: Chart;
  cashBreakdownChart!: Chart;
  payrollBreakdownChart!: Chart;
  accountPositionChart!: Chart;
  currencyBreakdownChart!: Chart;
  counterpartyChart!: Chart;
  holdingsChart!: Chart;
  topCustomersChart!: Chart;
  expandedChart!: Chart;
  
  expandedTitle: string = '';
  displayChartModal: boolean = false;
  
  // Date range for reports
  startDate: Date = new Date();
  endDate: Date = new Date();
  dateRangeOptions: any[] = [];
  selectedDateRange: string = 'today';
  
  // Loading state
  loading: boolean = false;
  
  // Report data
  reportData: any = {
    cashSummary: null,
    cashBreakdown: null,
    payroll: null,
    accountPositions: null,
    currencies: null,
    counterparties: null,
    holdings: null,
    topCustomers: null
  };
  
  // Store the original chart data and configurations
  private chartConfigs: Record<string, {type: ChartType, data: ChartData, options: ChartOptions}> = {};
  private selectedChartId: string = '';

  // Static data for the report
  private staticReportData = {
    cashSummary: {
      openingBalance: 10000000,
      closingBalance: 9000000,
      netMovement: -1000000
    },
    cashBreakdown: {
      movements: {
        customerRepayments: 2000000,
        tax: -500000,
        payroll: -800000,
        opex: -200000,
        collateral: -1000000,
        bondPurchases: -500000,
        net: -1000000
      }
    },
    payroll: {
      ukOperations: 500000,
      asiaOperations: 300000
    },
    accountPositions: {
      accounts: [
        { name: 'Account 1', change: 500000 },
        { name: 'Account 2', change: -1000000 },
        { name: 'Account 3', change: -500000 }
      ]
    },
    currencies: {
      currencies: [
        { code: 'EUR', amount: 8000000 },
        { code: 'USD', amount: 600000 },
        { code: 'GBP', amount: 400000 }
      ],
      total: 9000000
    },
    counterparties: {
      counterparties: [
        { name: 'HSBC', exposure: 5000000 },
        { name: 'Barclays', exposure: 4000000 }
      ],
      totalCash: 9000000,
      limit: 0.6 // 60%
    },
    holdings: {
      categories: [
        { name: 'Operational Cash', amount: 4500000 },
        { name: 'Customer Money (Safeguarded)', amount: 2500000 },
        { name: 'Collateral', amount: 1200000 },
        { name: 'Investments', amount: 800000 }
      ],
      total: 9000000
    },
    topCustomers: {
      customers: [
        { name: 'Customer A', amount: 350000 },
        { name: 'Customer B', amount: 280000 },
        { name: 'Customer C', amount: 215000 },
        { name: 'Customer D', amount: 180000 },
        { name: 'Customer E', amount: 150000 }
      ]
    }
  };

  constructor(
    private datePipe: DatePipe
  ) {
    // Initialize date range options
    this.initializeDateRangeOptions();
    this.setDateRange('today');
  }

  ngAfterViewInit() {
    // Load initial data
    this.loadReportData();
  }
  
  ngOnDestroy() {
    // Clean up chart instances to prevent memory leaks
    const charts = [
      this.cashSummaryChart,
      this.cashBreakdownChart,
      this.payrollBreakdownChart,
      this.accountPositionChart,
      this.currencyBreakdownChart,
      this.counterpartyChart,
      this.holdingsChart,
      this.topCustomersChart,
      this.expandedChart
    ];
    
    charts.forEach(chart => {
      if (chart) chart.destroy();
    });
  }

  initializeDateRangeOptions() {
    this.dateRangeOptions = [
      { label: 'Today', value: 'today' },
      { label: 'Yesterday', value: 'yesterday' },
      { label: 'Last 7 Days', value: 'week' },
      { label: 'Last 30 Days', value: 'month' },
      { label: 'This Quarter', value: 'quarter' },
      { label: 'This Year', value: 'year' },
      { label: 'Custom Range', value: 'custom' }
    ];
  }

  setDateRange(range: string) {
    this.selectedDateRange = range;
    const today = new Date();
    
    switch(range) {
      case 'today':
        this.startDate = new Date(today);
        this.endDate = new Date(today);
        break;
      case 'yesterday':
        this.startDate = new Date(today);
        this.startDate.setDate(this.startDate.getDate() - 1);
        this.endDate = new Date(this.startDate);
        break;
      case 'week':
        this.startDate = new Date(today);
        this.startDate.setDate(this.startDate.getDate() - 7);
        this.endDate = new Date(today);
        break;
      case 'month':
        this.startDate = new Date(today);
        this.startDate.setDate(this.startDate.getDate() - 30);
        this.endDate = new Date(today);
        break;
      case 'quarter':
        this.startDate = new Date(today.getFullYear(), Math.floor(today.getMonth() / 3) * 3, 1);
        this.endDate = new Date(today);
        break;
      case 'year':
        this.startDate = new Date(today.getFullYear(), 0, 1);
        this.endDate = new Date(today);
        break;
      case 'custom':
        // Custom date range - don't change dates, will be handled by date picker
        break;
    }
    
    // If range changed, reload data
    if (range !== 'custom') {
      this.loadReportData();
    }
  }

  onCustomDateRangeChange() {
    // Validate dates
    if (this.startDate && this.endDate && this.startDate <= this.endDate) {
      this.loadReportData();
    }
  }

  loadReportData() {
    this.loading = true;
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // Generate slightly different data based on date range to simulate real data changes
      const rangeModifier = this.getDateRangeModifier();
      this.reportData = this.generateReportData(rangeModifier);
      
      // Initialize charts with the new data
      this.initializeCharts();
      
      this.loading = false;
    }, 1200); // Simulate network delay
  }

  // Helper method to generate a modifier based on selected date range
  private getDateRangeModifier(): number {
    // Different ranges get different modifiers to simulate data variations
    switch (this.selectedDateRange) {
      case 'today':
        return 1.0;
      case 'yesterday':
        return 0.95;
      case 'week':
        return 1.1;
      case 'month':
        return 1.2;
      case 'quarter':
        return 1.3;
      case 'year':
        return 1.5;
      case 'custom':
        // Calculate a modifier based on date range length
        const diffTime = Math.abs(this.endDate.getTime() - this.startDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return 1 + (diffDays / 100);
      default:
        return 1.0;
    }
  }

  // Generate modified data based on the base static data
  private generateReportData(modifier: number): any {
    // Deep clone the static data to avoid modifying the original
    const baseData = JSON.parse(JSON.stringify(this.staticReportData));
    
    // Apply modifier to numeric values
    const applyModifier = (value: number): number => {
      // Add some randomness to make the changes look more natural
      const randomFactor = 0.9 + (Math.random() * 0.2); // Between 0.9 and 1.1
      return Math.round(value * modifier * randomFactor);
    };
    
    // Cash Summary
    baseData.cashSummary.openingBalance = applyModifier(baseData.cashSummary.openingBalance);
    baseData.cashSummary.closingBalance = applyModifier(baseData.cashSummary.closingBalance);
    baseData.cashSummary.netMovement = baseData.cashSummary.closingBalance - baseData.cashSummary.openingBalance;
    
    // Cash Breakdown
    for (const key in baseData.cashBreakdown.movements) {
      if (Object.prototype.hasOwnProperty.call(baseData.cashBreakdown.movements, key) && key !== 'net') {
        baseData.cashBreakdown.movements[key] = applyModifier(baseData.cashBreakdown.movements[key]);
      }
    }
    // Recalculate net movement
    baseData.cashBreakdown.movements.net = Object.keys(baseData.cashBreakdown.movements)
      .filter(key => key !== 'net')
      .reduce((sum, key) => sum + baseData.cashBreakdown.movements[key], 0);
    
    // Payroll
    baseData.payroll.ukOperations = applyModifier(baseData.payroll.ukOperations);
    baseData.payroll.asiaOperations = applyModifier(baseData.payroll.asiaOperations);
    
    // Account Positions
    baseData.accountPositions.accounts.forEach(account => {
      account.change = applyModifier(account.change);
    });
    
    // Currencies
    baseData.currencies.currencies.forEach(currency => {
      currency.amount = applyModifier(currency.amount);
    });
    baseData.currencies.total = baseData.currencies.currencies.reduce((sum, curr) => sum + curr.amount, 0);
    
    // Counterparties
    baseData.counterparties.counterparties.forEach(cp => {
      cp.exposure = applyModifier(cp.exposure);
    });
    baseData.counterparties.totalCash = baseData.counterparties.counterparties.reduce((sum, cp) => sum + cp.exposure, 0);
    
    // Holdings
    baseData.holdings.categories.forEach(cat => {
      cat.amount = applyModifier(cat.amount);
    });
    baseData.holdings.total = baseData.holdings.categories.reduce((sum, cat) => sum + cat.amount, 0);
    
    // Top Customers
    baseData.topCustomers.customers.forEach(customer => {
      customer.amount = applyModifier(customer.amount);
    });
    
    // Sort top customers by amount
    baseData.topCustomers.customers.sort((a, b) => b.amount - a.amount);
    
    return baseData;
  }

  initializeCharts() {
    // Initialize all charts
    this.createCashSummaryChart();
    this.createCashBreakdownChart();
    this.createPayrollBreakdownChart();
    this.createAccountPositionChart();
    this.createCurrencyBreakdownChart();
    this.createCounterpartyChart();
    this.createHoldingsChart();
    this.createTopCustomersChart();
  }

  createCashSummaryChart() {
    const data = this.reportData?.cashSummary;
    
    const chartData: ChartData = {
      labels: ['Opening Balance', 'Closing Balance', 'Net Movement'],
      datasets: [{
        label: 'Cash Position (EUR)',
        data: [data.openingBalance, data.closingBalance, data.netMovement],
        backgroundColor: [
          '#07435B',
          '#07435B',
          data.netMovement >= 0 ? '#2ecc71' : '#e74c3c'
        ],
        borderColor: [
          '#07435B',
          '#07435B',
          data.netMovement >= 0 ? '#2ecc71' : '#e74c3c'
        ],
        borderWidth: 1
      }]
    };
    
    const chartOptions: ChartOptions = { 
      responsive: true, 
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            callback: function(value) {
              return '€' + (Number(value) / 1000000).toFixed(1) + 'M';
            }
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += '€' + (context.parsed.y / 1000000).toFixed(2) + 'M';
              }
              return label;
            }
          }
        }
      }
    };
    
    this.chartConfigs['cashSummary'] = {
      type: 'bar',
      data: chartData,
      options: chartOptions
    };
    
    // Destroy previous instance if it exists
    if (this.cashSummaryChart) {
      this.cashSummaryChart.destroy();
    }
    
    this.cashSummaryChart = new Chart(this.cashSummaryChartRef.nativeElement, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }

  createCashBreakdownChart() {
    const data = this.reportData?.cashBreakdown;
    const movements = data.movements;
    
    const chartData: ChartData = {
      labels: ['Customer Repayments', 'Tax', 'Payroll', 'OpEx', 'Collateral', 'Bond Purchases', 'Net'],
      datasets: [{
        label: 'Cash Movements (EUR)',
        data: [
          movements.customerRepayments, 
          movements.tax, 
          movements.payroll, 
          movements.opex, 
          movements.collateral, 
          movements.bondPurchases, 
          movements.net
        ],
        backgroundColor: [
          '#2ecc71', // Green for positive
          movements.tax >= 0 ? '#2ecc71' : '#e74c3c',
          movements.payroll >= 0 ? '#2ecc71' : '#e74c3c',
          movements.opex >= 0 ? '#2ecc71' : '#e74c3c',
          movements.collateral >= 0 ? '#2ecc71' : '#e74c3c',
          movements.bondPurchases >= 0 ? '#2ecc71' : '#e74c3c',
          '#07435B'  // Blue for net
        ],
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1
      }]
    };
    
    const chartOptions: ChartOptions = { 
      responsive: true, 
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            callback: function(value) {
              return '€' + (Number(value) / 1000000).toFixed(1) + 'M';
            }
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += '€' + (context.parsed.y / 1000000).toFixed(2) + 'M';
              }
              return label;
            }
          }
        }
      }
    };
    
    this.chartConfigs['cashBreakdown'] = {
      type: 'bar',
      data: chartData,
      options: chartOptions
    };
    
    if (this.cashBreakdownChart) {
      this.cashBreakdownChart.destroy();
    }
    
    this.cashBreakdownChart = new Chart(this.cashBreakdownChartRef.nativeElement, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }

  createPayrollBreakdownChart() {
    const data = this.reportData?.payroll;
    
    const chartData: ChartData = {
      labels: ['UK Operations', 'Asia Operations'],
      datasets: [{
        label: 'Payroll Breakdown',
        data: [data.ukOperations, data.asiaOperations],
        backgroundColor: [
          '#3498db',
          '#9b59b6'
        ],
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 2,
        hoverOffset: 10
      }]
    };
    
    const chartOptions: ChartOptions = { 
      responsive: true, 
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed !== null) {
                label += '€' + (context.parsed / 1000).toFixed(1) + 'K';
              }
              return label;
            }
          }
        }
      }
    };
    
    this.chartConfigs['payrollBreakdown'] = {
      type: 'pie',
      data: chartData,
      options: chartOptions
    };
    
    if (this.payrollBreakdownChart) {
      this.payrollBreakdownChart.destroy();
    }
    
    this.payrollBreakdownChart = new Chart(this.payrollBreakdownChartRef.nativeElement, {
      type: 'pie',
      data: chartData,
      options: chartOptions
    });
  }

  createAccountPositionChart() {
    const data = this.reportData?.accountPositions;
    
    const labels = data.accounts.map(account => account.name);
    const values = data.accounts.map(account => account.change);
    const colors = data.accounts.map(account => account.change >= 0 ? '#2ecc71' : '#e74c3c');
    
    const chartData: ChartData = {
      labels: labels,
      datasets: [{
        label: 'Account Changes',
        data: values,
        backgroundColor: colors,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1
      }]
    };
    
    const chartOptions: ChartOptions = { 
      responsive: true, 
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            callback: function(value) {
              return '€' + (Number(value) / 1000000).toFixed(1) + 'M';
            }
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += '€' + (context.parsed.y / 1000000).toFixed(2) + 'M';
              }
              return label;
            }
          }
        }
      }
    };
    
    this.chartConfigs['accountPosition'] = {
      type: 'bar',
      data: chartData,
      options: chartOptions
    };
    
    if (this.accountPositionChart) {
      this.accountPositionChart.destroy();
    }
    
    this.accountPositionChart = new Chart(this.accountPositionChartRef.nativeElement, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }

  createCurrencyBreakdownChart() {
    const data = this.reportData?.currencies;
    
    const labels = data.currencies.map(currency => currency.code);
    const values = data.currencies.map(currency => currency.amount);
    
    const chartData: ChartData = {
      labels: labels,
      datasets: [{
        label: 'Currency Distribution',
        data: values,
        backgroundColor: [
          '#07435B', // Main corporate color
          '#3498db', // Light blue
          '#1abc9c'  // Teal
        ],
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 2,
        hoverOffset: 10
      }]
    };
    
    const totalAmount = data.total;
    
    const chartOptions: ChartOptions = { 
      responsive: true, 
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed !== null) {
                const value = context.parsed;
                const percentage = ((value / totalAmount) * 100).toFixed(1);
                label += '€' + (value / 1000000).toFixed(2) + 'M (' + percentage + '%)';
              }
              return label;
            }
          }
        }
      }
    };
    
    this.chartConfigs['currencyBreakdown'] = {
      type: 'doughnut',
      data: chartData,
      options: chartOptions
    };
    
    if (this.currencyBreakdownChart) {
      this.currencyBreakdownChart.destroy();
    }
    
    this.currencyBreakdownChart = new Chart(this.currencyBreakdownChartRef.nativeElement, {
      type: 'doughnut',
      data: chartData,
      options: chartOptions
    });
  }

  createCounterpartyChart() {
    const data = this.reportData?.counterparties;
    
    const labels = data.counterparties.map(cp => cp.name);
    const values = data.counterparties.map(cp => cp.exposure);
    const limitValue = data.totalCash * data.limit;
    const limitValues = new Array(labels.length).fill(limitValue);
    
    const chartData: ChartData = {
      labels: labels,
      datasets: [
        {
          label: 'Current Exposure',
          data: values,
          backgroundColor: '#07435B',
          borderWidth: 1
        },
        {
          label: `${data.limit * 100}% Limit`,
          data: limitValues,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: '#e74c3c',
          borderWidth: 2,
          type: 'line'
        }
      ]
    };
    
    const chartOptions: ChartOptions = { 
      responsive: true, 
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            callback: function(value) {
              return '€' + (Number(value) / 1000000).toFixed(1) + 'M';
            }
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                const value = context.parsed.y;
                if (context.datasetIndex === 0) { // Only for current exposure
                  const percentage = ((value / data.totalCash) * 100).toFixed(1);
                  label += '€' + (value / 1000000).toFixed(2) + 'M (' + percentage + '%)';
                } else {
                  label += '€' + (value / 1000000).toFixed(2) + 'M';
                }
              }
              return label;
            }
          }
        }
      }
    };
    
    this.chartConfigs['counterparty'] = {
      type: 'bar',
      data: chartData,
      options: chartOptions
    };
    
    if (this.counterpartyChart) {
      this.counterpartyChart.destroy();
    }
    
    this.counterpartyChart = new Chart(this.counterpartyChartRef.nativeElement, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }

  createHoldingsChart() {
    const data = this.reportData?.holdings;
    
    const labels = data.categories.map(cat => cat.name);
    const values = data.categories.map(cat => cat.amount);
    
    const chartData: ChartData = {
      labels: labels,
      datasets: [{
        label: 'Holdings Categorization',
        data: values,
        backgroundColor: [
          '#07435B', // Dark blue
          '#2ecc71', // Green
          '#f39c12', // Orange
          '#9b59b6'  // Purple
        ],
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 2,
        hoverOffset: 10
      }]
    };
    
    const totalAmount = data.total;
    
    const chartOptions: ChartOptions = { 
      responsive: true, 
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            boxWidth: 15,
            padding: 10
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed !== null) {
                const value = context.parsed;
                const percentage = ((value / totalAmount) * 100).toFixed(1);
                label += '€' + (value / 1000000).toFixed(2) + 'M (' + percentage + '%)';
              }
              return label;
            }
          }
        }
      }
    };
    
    this.chartConfigs['holdings'] = {
      type: 'pie',
      data: chartData,
      options: chartOptions
    };
    
    if (this.holdingsChart) {
      this.holdingsChart.destroy();
    }
    
    this.holdingsChart = new Chart(this.holdingsChartRef.nativeElement, {
      type: 'pie',
      data: chartData,
      options: chartOptions
    });
  }

  createTopCustomersChart() {
    const data = this.reportData?.topCustomers;
    
    const labels = data.customers.map(customer => customer.name);
    const values = data.customers.map(customer => customer.amount);
    
    const chartData: ChartData = {
      labels: labels,
      datasets: [{
        label: 'Top Repayments',
        data: values,
        backgroundColor: '#07435B',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1
      }]
    };
    
    const chartOptions: ChartOptions = { 
      responsive: true, 
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
        x: {
          ticks: {
            callback: function(value) {
              return '€' + (Number(value) / 1000).toFixed(0) + 'K';
            }
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.x !== null) {
                label += '€' + (context.parsed.x / 1000).toFixed(1) + 'K';
              }
              return label;
            }
          }
        }
      }
    };
    
    this.chartConfigs['topCustomers'] = {
      type: 'bar',
      data: chartData,
      options: chartOptions
    };
    
    if (this.topCustomersChart) {
      this.topCustomersChart.destroy();
    }
    
    this.topCustomersChart = new Chart(this.topCustomersChartRef.nativeElement, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }

    
  onDialogShow() {
    // Schedule chart creation to ensure DOM is ready
    setTimeout(() => {
      this.createExpandedChart();
    }, 100);
  }

 createExpandedChart() {
    // Get the selected chart configuration
    const chartConfig = this.chartConfigs[this.selectedChartId];
    
    if (!chartConfig || !this.expandedChartRef?.nativeElement) {
      console.error('Chart configuration or expanded chart reference is missing');
      return;
    }
    
    // Destroy previous instance if it exists
    if (this.expandedChart) {
      this.expandedChart.destroy();
    }
    
    try {
      // Create a deep copy of the data to avoid any reference issues
      const chartData = JSON.parse(JSON.stringify(chartConfig.data));
      
      // Create a new chart with the stored configuration
      const ctx = this.expandedChartRef.nativeElement.getContext('2d');
      if (!ctx) {
        console.error('Could not get 2d context from expanded chart canvas');
        return;
      }
      
      // Create the expanded chart with the original configuration
      this.expandedChart = new Chart(ctx, {
        type: chartConfig.type,
        data: chartData,
        options: {
          ...chartConfig.options,
          animation: false // Disable animation for the expanded chart
        }
      });
    } catch (error) {
      console.error('Error creating expanded chart:', error);
    }
  }
  
  closeModal() {
    this.displayChartModal = false;
    if (this.expandedChart) {
      this.expandedChart.destroy();
      this.expandedChart = undefined as any;
    }
    this.selectedChartId = '';
  }
  
  
  refreshData() {
    this.loadReportData();
  }
  
    exportToPDF() {
    /*
    this.reportService.exportReportToPDF(this.reportData, this.startDate, this.endDate)
      .subscribe({
        next: (blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'cash-position-report.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        },
        error: (err) => console.error('Error exporting to PDF:', err)
      });
      */
  }
  
    exportToExcel() {
    /*
    this.reportService.exportReportToExcel(this.reportData, this.startDate, this.endDate)
      .subscribe({
        next: (blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'cash-position-report.xlsx';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        },
        error: (err) => console.error('Error exporting to Excel:', err)
      });
      */
  }
}