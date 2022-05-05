import { render } from '@testing-library/react';

import TypesLib from './types-lib';

describe('TypesLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TypesLib />);
    expect(baseElement).toBeTruthy();
  });
});
