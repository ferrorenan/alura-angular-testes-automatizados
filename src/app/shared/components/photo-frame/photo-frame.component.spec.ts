import {PhotoFrameComponent} from './photo-frame.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PhotoFrameModule} from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {

  // precisamos da fixture porque queremos testar o component
  let fixture: ComponentFixture<PhotoFrameComponent> = null;
  let component: PhotoFrameComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  });

  it(`Should display number of likes when (@Input likes) is incremented`, () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
    expect(element.textContent.trim()).toBe('1');
  });

  it('(D) Should update aria-label when (@Input likes) is incremented', () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('1: people liked');
  });

  it('(D) Should have aria-label with 0 (@Input likes)', () => {
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('0: people liked');
  });

  it('(D) Should display image with src and description when bound to properties', () => {
    const description = 'some description';
    const src = 'http://someimage.com/img.jpg';
    component.src = src;
    component.description = description;
    fixture.detectChanges();
    const img: HTMLElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(src);
    expect(img.getAttribute('alt')).toBe(description);
  });
});
