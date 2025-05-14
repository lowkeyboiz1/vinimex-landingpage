import { cn } from '@/lib/utils'
import { Focus } from 'lucide-react'
import { memo } from 'react'

const Title = ({ icon, title, className }: { icon?: React.ReactNode; title: string; className?: string }) => {
  return (
    <div className={cn('flex w-fit items-center gap-2 rounded-full bg-[#DFF5E1] px-4 py-2 font-bold text-[#1B793A]', className)}>
      <span>{icon ? icon : <Focus size={24} />}</span>
      <p>{title}</p>
    </div>
  )
}

export default memo(Title)
