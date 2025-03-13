import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragControlAreaComponent } from './drag-control-area.component';

describe('DragControlAreaComponent', () => {
  let component: DragControlAreaComponent;
  let fixture: ComponentFixture<DragControlAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragControlAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragControlAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
