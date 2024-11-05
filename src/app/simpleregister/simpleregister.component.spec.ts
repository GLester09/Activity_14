import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleregisterComponent } from './simpleregister.component';

describe('SimpleregisterComponent', () => {
  let component: SimpleregisterComponent;
  let fixture: ComponentFixture<SimpleregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
