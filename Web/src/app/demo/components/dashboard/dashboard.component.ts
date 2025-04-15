import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

import { BankAccount } from '../../api/bankAccount';
import { BankService } from '../../service/bank.service';
import { Task } from '../../api/task';
import { CountryService } from '../../service/country.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
    dataItem: any;
    pageChange($event: any) {
        throw new Error('Method not implemented.');
    }
    bankAccounts!: BankAccount[];

    chartData: any;
    chartOptions: any;

    barChartData: any;
    barChartOptions: any;

    subscription!: Subscription;
    counterpartiesList: any;

    constructor(private bankService: BankService, public layoutService: LayoutService, public countryService: CountryService) {
        this.subscription = this.layoutService.configUpdate$
            .pipe(debounceTime(25))
            .subscribe((config) => {
                this.initBarChart();
            });
    }

    ngOnInit() {
        this.initBarChart();
        this.bankService.getBankAccounts().then(data => this.bankAccounts = data);
    }

    initBarChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.barChartData = {
            labels: [this.getDate(-1), this.getDate(-2), this.getDate(-3), this.getDate(-4), this.getDate(-5), this.getDate(-6), this.getDate(-7), this.getDate(-8)],
            datasets: [
                {
                    label: 'Inflow',
                    backgroundColor: '#0c77A4',
                    borderColor: '#0c77A4',
                    data: [300000, 600000, 700000, 800000, 850000, 700000, 600000, 500000],
                    barThickness: 15 
                },
                {
                    label: 'Outflow',
                    backgroundColor: '#b0b1b3',
                    borderColor: '#b0b1b3',
                    data: [250000, 300000, 600000, 300000, 700000, 400000, 300000, 400000],
                    barThickness: 15 
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
                        label: function (tooltipItem) {
                            let datasetLabel = tooltipItem.dataset.label || '';
                            let value = tooltipItem.raw;
                            return `${datasetLabel}: £${value.toLocaleString()}`;
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
                        callback: function (value, index, values) {
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

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    getDate(days: number) {
        let date: Date = new Date();
        date.setDate(date.getDate() + days);

        let day: number = date.getDate();
        let month: number = date.getMonth() + 1; // Months are zero-based, so we add 1
        let year: number = date.getFullYear();

        let formattedDate: string = `${year}/${month}/${day}`;

        return formattedDate;
    }

}
