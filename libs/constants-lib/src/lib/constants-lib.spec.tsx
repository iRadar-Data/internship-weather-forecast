import { render } from '@testing-library/react';

import ConstantsLib from './constants-lib';

describe('ConstantsLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConstantsLib />);
    expect(baseElement).toBeTruthy();
  });
});
