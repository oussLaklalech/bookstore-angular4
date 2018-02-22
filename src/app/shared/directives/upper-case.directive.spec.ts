import { UpperCaseDirective } from './upper-case.directive';

fdescribe('UpperCaseDirective', () => {
  it('should create an instance', () => {
    const directive = new UpperCaseDirective({ nativeElement: {style: {} }});
    expect(directive).toBeTruthy();
  });
  it('should change the style', () => {
    const elem = { nativeElement: {style: {} }};
    const directive = new UpperCaseDirective(elem);
    expect(elem.nativeElement.style['text-transform']).toEqual('uppercase');
  });
});
