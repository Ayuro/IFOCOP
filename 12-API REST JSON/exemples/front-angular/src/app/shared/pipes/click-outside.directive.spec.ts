import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  standalone: true,
  template: `<p [appClickOutside]></p>`,
  imports: [ClickOutsideDirective],
})
class TestComponent {}

describe('ClickOutsideDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElements: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ClickOutsideDirective, TestComponent],
    }).createComponent(TestComponent);

    debugElements = fixture.debugElement.queryAll(
      By.directive(ClickOutsideDirective)
    );
  });

  it('should create an instance', () => {
    const directive = debugElements[0].injector.get(ClickOutsideDirective);
    expect(directive).toBeTruthy();
  });

  describe('onClick', () => {
    it('should emit if the click occurred outside the target', () => {
      // ARRANGE
      const directive = debugElements[0].injector.get(ClickOutsideDirective);
      spyOn(directive.appClickOutside, 'emit');
      const target = document.createElement('div');
      document.body.appendChild(target);
      // Création d'un événement de clic sur le document
      const event = new MouseEvent('click', { bubbles: true });
      document.dispatchEvent(event); // Émission de l'événement

      // ACT
      directive.onClick(target);

      // ASSERT
      expect(directive.appClickOutside.emit).toHaveBeenCalled();
    });
  });
});
