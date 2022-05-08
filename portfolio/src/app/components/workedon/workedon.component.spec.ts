import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkedonComponent } from './workedon.component';

describe('WorkedonComponent', () => {
  let component: WorkedonComponent;
  let fixture: ComponentFixture<WorkedonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkedonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkedonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
