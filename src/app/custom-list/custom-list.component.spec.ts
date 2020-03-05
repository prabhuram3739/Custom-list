import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import { CustomListComponent } from './custom-list.component';

describe('CustomListComponent', () => {
  let component: CustomListComponent;
  let fixture: ComponentFixture<CustomListComponent>;
  let title, button, inp;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    title = fixture.debugElement.query(By.css('#app-title'));
    button = fixture.debugElement.query(By.css('#submit-button'));
    inp = fixture.debugElement.query(By.css('#app-input'));
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`initial UI is rendered as expected`, async(() => {
	expect(title.nativeElement.textContent.trim()).toBe('Customer List' );
	expect(inp.nativeElement.textContent.trim()).toBe("");
	expect(button.nativeElement.textContent.trim()).toBe("Add Customer");
  }));

});
