import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReactAppComponent } from './my-react-app.component';

describe('MyReactAppComponent', () => {
  let component: MyReactAppComponent;
  let fixture: ComponentFixture<MyReactAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReactAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReactAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
