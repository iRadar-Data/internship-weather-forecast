import { render } from '@testing-library/react';
import ServicesLib from './services-lib';
describe('ServicesLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServicesLib />);
    expect(baseElement).toBeTruthy();
  });
});
