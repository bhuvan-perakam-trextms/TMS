import { Component, ViewChild } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { Approval } from 'src/app/demo/api/approval';
import { ApprovalService } from 'src/app/demo/service/approval.service';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrl: './approvals.component.scss'
})
export class ApprovalsComponent {
  @ViewChild(FullCalendarComponent) fullCalendarComponent: FullCalendarComponent;

  approvalsData: Approval[];
  filterMode: FilterableSettings = "menu";
  displayOverlay: boolean = false;
  selectedApproval: Approval;

  paymentApprovals: any[];
  calendarEvents: EventInput[];
  calendarOptions: CalendarOptions;

  constructor(private approvalService: ApprovalService) {
  }

  ngOnInit() {
    this.approvalService.getPaymentApprovals().then(data => {
      this.approvalsData = data;

      this.calendarEvents = this.approvalsData.map(event => ({
        title: `From: ${event.from}`,
        start: event.executionDate,
        extendedProps: {
          to: event.to,
          amount: event.amount,
          status: event.status
        }
      }));

      this.calendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin, timeGridPlugin],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: this.calendarEvents
      };

    });

    this.paymentApprovals = [
      { User: "Treasurer 1" },
      { User: "Treasurer 2" },
      { User: "Treasurer 3" }
    ]
  }

  onTabClicked($event)
  {
    this.reRenderCalendar();
  }

  ngAfterViewInit(): void {
    // Call reRenderCalendar after view has been initialized
    this.reRenderCalendar();
  }

  reRenderCalendar(): void {
    if (this.fullCalendarComponent) {
      this.fullCalendarComponent.getApi().render();
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

}
