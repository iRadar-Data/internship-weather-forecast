import { render } from '@testing-library/react';

import HelpersLib from './helpers-lib';

describe('HelpersLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HelpersLib />);
    expect(baseElement).toBeTruthy();
  });
});
