import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

import { BankAccount } from '../../api/bankAccount';
import { BankService } from '../../service/bank.service';
import { Task } from '../../api/task';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
    bankAccounts!: BankAccount[];
    tasks!: Task[];

    chartData: any;
    chartOptions: any;

    barChartData: any;
    barChartOptions: any;

    subscription!: Subscription;

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
        this.bankService.getBankAccounts().then(data => this.bankAccounts = data);
        this.tasks = [
            {Name: "Counterparty Setup", Color: "orange", Percentage: "50%" },
            {Name: "Payments", Color: "cyan", Percentage: "90%" },
            {Name: "Invoice Approvals", Color: "pink", Percentage: "10%" },
            {Name: "Expense Reports", Color: "green", Percentage: "35%" },
            {Name: "Document Upload", Color: "purple", Percentage: "75%" },
            {Name: "Budget Planning", Color: "teal", Percentage: "80%" },
            {Name: "Risk Assessment", Color: "yellow", Percentage: "90%" },
            {Name: "Compliance Checks", Color: "red", Percentage: "90%" },
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
