import { Button } from 'flowbite-react';


export default function TypeItem({ name, left, right }) {
  const buttonClass = `rounded-none border-t-2 border-t-slate-300 lg:border-y-0 lg:border-x-2 ${left ? "lg:border-l-0" : ""} ${right ? "lg:border-r-0" : ""} lg:border-slate-300 h-min text-slate-50 bg-orange-500 focus:ring-slate-500 enabled:hover:bg-orange-400 dark:bg-slate-300 dark:focus:ring-slate-400 dark:enabled:hover:bg-slate-400`

  return (
  <>
    <Button className={buttonClass}>{name}</Button>
  </>
  )
}