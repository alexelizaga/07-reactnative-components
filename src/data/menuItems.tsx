import { MenuItem } from '../interfaces/appInterface';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen'
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen'
  },
  {
    name: 'Alert',
    icon: 'alert-circle-outline',
    component: 'AlertScreen'
  },
  {
    name: 'Text Inputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen'
  },
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen'
  },
  {
    name: 'Section list',
    icon: 'list-outline',
    component: 'SectionListScreen'
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen'
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen'
  }
];