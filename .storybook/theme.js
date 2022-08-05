import { create } from '@storybook/theming';

export default create({
  base: 'dark',
  brandTitle: 'My custom storybook',
  brandImage: require('../public/images/logo2.png'),
  brandTarget: '_self',
});