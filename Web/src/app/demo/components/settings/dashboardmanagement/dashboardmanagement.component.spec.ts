import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmanagementComponent } from './dashboardmanagement.component';

describe('DashboardmanagementComponent', () => {
  let component: DashboardmanagementComponent;
  let fixture: ComponentFixture<DashboardmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardmanagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
