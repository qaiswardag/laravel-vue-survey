<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-8 sm:px-0">
        Content goes here
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>

<script>
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/vue/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  {name: 'Dashboard', href: '#', current: true},
  {name: 'Team', href: '#', current: false},
  {name: 'Projects', href: '#', current: false},
  {name: 'Calendar', href: '#', current: false},
]
const userNavigation = [
  {name: 'Your Profile', href: '#'},
  {name: 'Settings', href: '#'},
  {name: 'Sign out', href: '#'},
]

export default {
  name: 'Dashboard',
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
  },
  setup() {

    return {
      user,
      navigation,
      userNavigation,
    }
  },
}
</script>
