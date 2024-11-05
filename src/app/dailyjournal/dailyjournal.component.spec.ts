import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyjournalComponent } from './dailyjournal.component';

describe('DailyjournalComponent', () => {
  let component: DailyjournalComponent;
  let fixture: ComponentFixture<DailyjournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyjournalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyjournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
