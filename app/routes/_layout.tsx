import { Outlet } from 'react-router'
import { Navbar } from '~/components/navbar'
import type { Route } from './+types/_layout'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Insper Blockchain' },
    {
      name: 'description',
      content:
        'A primeira organização estudantil da América Latina focada em blockchain.',
    },
  ]
}

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
