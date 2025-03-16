import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import Chart, { ChartType, ChartData, ChartOptions } from 'chart.js/auto';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements AfterViewInit, OnDestroy {
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
  
  // Store the original chart data and configurations
  private chartConfigs: Record<string, {type: ChartType, data: ChartData, options: ChartOptions}> = {};
  private selectedChartId: string = '';

  ngAfterViewInit() {
    this.createCashSummaryChart();
    this.createCashBreakdownChart();
    this.createPayrollBreakdownChart();
    this.createAccountPositionChart();
    this.createCurrencyBreakdownChart();
    this.createCounterpartyChart();
    this.createHoldingsChart();
    this.createTopCustomersChart();
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

  createCashSummaryChart() {
    const chartData: ChartData = {
      labels: ['Opening Balance', 'Closing Balance', 'Net Movement'],
      datasets: [{
        label: 'Cash Position (EUR)',
        data: [10000000, 9000000, -1000000],
        backgroundColor: [
          '#07435B',
          '#07435B',
          '#e74c3c'
        ],
        borderColor: [
          '#07435B',
          '#07435B',
          '#e74c3c'
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
    
    this.cashSummaryChart = new Chart(this.cashSummaryChartRef.nativeElement, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }

  createCashBreakdownChart() {
    const chartData: ChartData = {
      labels: ['Customer Repayments', 'Tax', 'Payroll', 'OpEx', 'Collateral', 'Bond Purchases', 'Net'],
      datasets: [{
        label: 'Cash Movements (EUR)',
        data: [2000000, -500000, -800000, -200000, -1000000, -500000, -1000000],
        backgroundColor: [
          '#2ecc71', // Green for positive
          '#e74c3c', // Red for negative
          '#e74c3c',
          '#e74c3c',
          '#e74c3c',
          '#e74c3c',
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
    
    this.cashBreakdownChart = new Chart(this.cashBreakdownChartRef.nativeElement, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }

  createPayrollBreakdownChart() {
    const chartData: ChartData = {
      labels: ['UK Operations', 'Asia Operations'],
      datasets: [{
        label: 'Payroll Breakdown',
        data: [500000, 300000],
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
    
    this.payrollBreakdownChart = new Chart(this.payrollBreakdownChartRef.nativeElement, {
      type: 'pie',
      data: chartData,
      options: chartOptions
    });
  }

  createAccountPositionChart() {
    const chartData: ChartData = {
      labels: ['Account 1', 'Account 2', 'Account 3'],
      datasets: [{
        label: 'Account Changes',
        data: [500000, -1000000, -500000],
        backgroundColor: [
          '#2ecc71', // Green for positive
          '#e74c3c', // Red for negative
          '#e74c3c'  // Red for negative
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
    
    this.chartConfigs['accountPosition'] = {
      type: 'bar',
      data: chartData,
      options: chartOptions
    };
    
    this.accountPositionChart = new Chart(this.accountPositionChartRef.nativeElement, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }

  createCurrencyBreakdownChart() {
    const chartData: ChartData = {
      labels: ['EUR', 'USD', 'GBP'],
      datasets: [{
        label: 'Currency Distribution',
        data: [8000000, 600000, 400000],
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
                const percentage = ((value / 9000000) * 100).toFixed(1);
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
    
    this.currencyBreakdownChart = new Chart(this.currencyBreakdownChartRef.nativeElement, {
      type: 'doughnut',
      data: chartData,
      options: chartOptions
    });
  }

  createCounterpartyChart() {
    const chartData: ChartData = {
      labels: ['HSBC', 'Barclays'],
      datasets: [
        {
          label: 'Current Exposure',
          data: [5000000, 4000000],
          backgroundColor: '#07435B',
          borderWidth: 1
        },
        {
          label: '60% Limit',
          data: [5400000, 5400000], // 60% of 9M = 5.4M
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
                  const percentage = ((value / 9000000) * 100).toFixed(1);
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
    
    this.counterpartyChart = new Chart(this.counterpartyChartRef.nativeElement, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }

  createHoldingsChart() {
    const chartData: ChartData = {
      labels: ['Operational Cash', 'Customer Money (Safeguarded)', 'Collateral', 'Investments'],
      datasets: [{
        label: 'Holdings Categorization',
        data: [4500000, 2500000, 1200000, 800000],
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
                const percentage = ((value / 9000000) * 100).toFixed(1);
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
    
    this.holdingsChart = new Chart(this.holdingsChartRef.nativeElement, {
      type: 'pie',
      data: chartData,
      options: chartOptions
    });
  }

  createTopCustomersChart() {
    const chartData: ChartData = {
      labels: ['Customer A', 'Customer B', 'Customer C', 'Customer D', 'Customer E'],
      datasets: [{
        label: 'Top Repayments',
        data: [350000, 280000, 215000, 180000, 150000],
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
    
    this.topCustomersChart = new Chart(this.topCustomersChartRef.nativeElement, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }

  expandChart(chartInstance: Chart, chartType: ChartType, title: string) {
    this.expandedTitle = title;
    
    const chartIdMap: {[key: string]: string} = {
      'Daily Cash Movement Summary': 'cashSummary',
      'Cash Movement Breakdown': 'cashBreakdown',
      'Payroll Breakdown': 'payrollBreakdown',
      'Bank Account Position Changes': 'accountPosition',
      'Currency Breakdown': 'currencyBreakdown',
      'Counterparty Exposure': 'counterparty',
      'Holdings Categorization': 'holdings',
      'Top Customer Repayments': 'topCustomers'
    };
    
    this.selectedChartId = chartIdMap[title] || '';
    
    // Show the modal
    this.displayChartModal = true;
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
}