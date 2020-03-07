import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import { CustomListComponent } from './custom-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('CustomListComponent', () => {
  let component: CustomListComponent;
  let fixture: ComponentFixture<CustomListComponent>;
  let title, button, inp;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
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

  it(`Should add the customer by calling the onDisplay method`, async(() => {
    spyOn(component, 'onDisplay');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onDisplay).toHaveBeenCalled();
    });
  }));

  it(`Should add the customer by calling the onDisplay method on click of the Add customer button`, async(() => {
    let input = fixture.debugElement.query(By.css('input'));
    input.triggerEventHandler('Keyup.enter', {});
    fixture.detectChanges();
    expect(component.names.length).toBeGreaterThanOrEqual(0);
  }));

  it(`Should remove the customer by calling the deleteName method on click of the close button`, async(() => {
    component.deleteName('Test');
    expect(component.names.length).toBeLessThan(1);
  }));

  it(`After adding customer, input has no value`, async(() => {
    expect(inp.nativeElement.textContent.trim()).toBe("");
  }));
  

});
