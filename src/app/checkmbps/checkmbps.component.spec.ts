import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmbpsComponent } from './checkmbps.component';

describe('CheckmbpsComponent', () => {
  let component: CheckmbpsComponent;
  let fixture: ComponentFixture<CheckmbpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckmbpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckmbpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
