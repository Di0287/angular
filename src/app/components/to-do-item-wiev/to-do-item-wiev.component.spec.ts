import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItemWievComponent } from './to-do-item-wiev.component';

describe('ToDoItemWievComponent', () => {
  let component: ToDoItemWievComponent;
  let fixture: ComponentFixture<ToDoItemWievComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoItemWievComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoItemWievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
