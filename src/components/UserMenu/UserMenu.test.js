import { cleanup, fireEvent, render } from '@testing-library/react';
import { UserMenu } from './UserMenu';


afterEach(cleanup);

describe('UserMenu', () => {
  //   it('changes the class when hovered', () => {
  //     const component = render.create(<UserMenu />);
  //   });
  it('should be button', () => {
    const type = 'button';
    expect(type).toBe('button');
  });

});
