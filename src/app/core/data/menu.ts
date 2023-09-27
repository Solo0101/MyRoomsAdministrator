import { NavItem } from '@core/models/nav-item.model';

export let menu: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    route: ''
  },
  {
    displayName: 'Profile',
    iconName: 'person',
    route: 'my-profile'
  },
  {
    displayName: 'Settings',
    iconName: 'settings',
    route: 'settings'
  }
];
