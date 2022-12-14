import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpAppComponent } from './create-emp-app.component';

describe('CreateEmpAppComponent', () => {
  let component: CreateEmpAppComponent;
  let fixture: ComponentFixture<CreateEmpAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmpAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmpAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
