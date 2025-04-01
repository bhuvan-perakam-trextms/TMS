 import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

import { BankService } from '../../../service/bank.service';
import { Task } from '../../../api/task';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule,
  ],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss'
})
 
export class InvoicesComponent implements OnInit, OnDestroy {
dataItem: any;
pageChange($event: any) {
throw new Error('Method not implemented.');
}
     
    tasks!: any[];

    chartData: any;
    chartOptions: any;

    barChartData: any;
    barChartOptions: any;

    subscription!: Subscription;
counterpartiesList: any;

    constructor(private bankService: BankService,  public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$
        .pipe(debounceTime(25))
        .subscribe((config) => {
            this.initChart();
            this.initBarChart();
        });
    }

    ngOnInit() {
        this.initChart();
        this.initBarChart();
        this.tasks = [
          {
            "importedFile": "Invoice_Q1_2025.xlsx",
            "importResults": "Successful",
            "importedOn": "2025-03-01 10:30 AM",
            "importedBy": "John Doe",
            "actions": ["View", "Delete"]
          },
          {
            "importedFile": "Sales_Report_2024.csv",
            "importResults": "Failed",
            "importedOn": "2025-02-15 03:45 PM",
            "importedBy": "Jane Smith",
            "actions": ["Retry", "Delete"]
          },
          {
            "importedFile": "Transactions_Jan.xlsx",
            "importResults": "Partial Success",
            "importedOn": "2025-02-10 09:15 AM",
            "importedBy": "Mark Johnson",
            "actions": ["View", "Retry"]
          },
          {
            "importedFile": "Customer_Data_2025.csv",
            "importResults": "Successful",
            "importedOn": "2025-01-28 02:00 PM",
            "importedBy": "Emily White",
            "actions": ["View", "Delete"]
          }
        ];
    }

    initBarChart()
    {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.barChartData = {
            labels: [this.getDate(-1), this.getDate(-2), this.getDate(-3), this.getDate(-4), this.getDate(-5)],
            datasets: [
                {
                    label: 'Inflow',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    borderColor: documentStyle.getPropertyValue('--green-500'),
                    data: [1000, 3000, 4000, 3000, 1000, 5000]
                },
                {
                    label: 'Outflow',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [500, 1000, 1500, 1000, 500, 1000]
                }
            ]
        };

        this.barChartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            let datasetLabel = tooltipItem.dataset.label || '';
                            let value = tooltipItem.raw;
                            return `${datasetLabel}: $${value.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                        callback: function(value, index, values) {
                            return '£' + value.toLocaleString(); 
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
                

            }
        };
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    getDate(days : number)
  {
    let date:Date = new Date();
    date.setDate(date.getDate() + days);
    
    let day: number = date.getDate();
    let month: number = date.getMonth() + 1; // Months are zero-based, so we add 1
    let year: number = date.getFullYear();

    let formattedDate: string = `${year}/${month}/${day}`;

    return formattedDate;
  }
  
}



