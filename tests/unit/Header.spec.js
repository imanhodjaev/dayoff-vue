import { shallow } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
  it('renders Header', () => {
    const msg = 'DayOff';
    const wrapper = shallow(Header);
    const headerTitle = wrapper.find('.header__title').text();
    expect(headerTitle).toMatch(msg);
  });
});
