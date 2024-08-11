import { Component, ViewChild, AfterViewInit, ElementRef  } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { Approval } from 'src/app/demo/api/approval';
import { ApprovalService } from 'src/app/demo/service/approval.service';
import { SchedulerEvent } from "@progress/kendo-angular-scheduler";

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrl: './approvals.component.scss'
})
export class ApprovalsComponent implements AfterViewInit  {
  
  filterMode: FilterableSettings = "menu";
  displayOverlay: boolean = false;
  selectedApproval: Approval;

  paymentApprovals: any[];

  selectedDate: Date;
  approvalsData: Approval[];
  approvalsCalendarData: SchedulerEvent[];
  currentYear: number;
  displayDate: Date;

  constructor(private approvalService: ApprovalService) {
    this.currentYear = new Date().getFullYear(); 
    this.displayDate = new Date(this.currentYear, 5, 24)
  }

  ngOnInit() {
    this.approvalService.getPaymentApprovals().then(data => {
      this.approvalsData = data;
      let incrementalId = 1;
      this.approvalsCalendarData = data.map(
        (dataItem) =>
            <SchedulerEvent>
          {
              id: incrementalId++,
              start: this.parseAdjust(dataItem.executionDate.toString()),
              startTimezone: null,
              end: this.parseAdjust(dataItem.executionDate.toString()),
              endTimezone: null,
              isAllDay: false,
              title: dataItem.from,
              description: `Money moves from ${dataItem.from} to ${dataItem.to}`,
              recurrenceRule: null,
              recurrenceId: null,
              recurrenceException: null,
              roomId:  this.randomInt(1, 2),
              ownerID: 2,
              eventColor: '#33FF57'//this.getEventColor(dataItem), // Adding color to the event
            }
      );
      
    });

    this.paymentApprovals = [
      { User: "Treasurer 1" },
      { User: "Treasurer 2" },
      { User: "Treasurer 3" }
    ];
  }

  onTabClicked($event) {
  }

  ngAfterViewInit(): void {
  }

  getEventColor(dataItem: Approval): string {
    if (dataItem.status === 'Expired') {
      return '#FF5733'; // Red
    } else if (dataItem.status === 'Awaiting Approval') {
      return '#33FF57'; // Green
    } else {
      return '#3357FF'; // Blue
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

  handlePopup(dataItem) {
    this.displayOverlay = true;
    this.selectedApproval = dataItem;
  }

  parseAdjust(eventDate: string): Date 
  {
    const date = new Date(eventDate);
    date.setFullYear(this.currentYear);
    return date;
  };
  
  randomInt(min, max): number 
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}
