import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-invoices',
    standalone: false,
    templateUrl: './invoices.component.html',
    styleUrl: './invoices.component.scss'
})

export class InvoicesComponent implements OnInit {
    visible: boolean = false;
    dataItem: any;
    tasks!: any[];

    constructor() {
    }

    ngOnInit() {
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

    openSidebar() {
        this.visible = true;
    }

    pageChange($event: any) {
        throw new Error('Method not implemented.');
    }

}



