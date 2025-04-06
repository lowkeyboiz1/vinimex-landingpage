import { cn } from '@/lib/utils'

export default function TitleBadge({ title, className }: { title: string; className?: string }) {
  return <div className={cn('mx-auto mb-4 w-fit rounded-lg bg-[#E2F0FB] px-3 py-1.5 text-sm text-[#0C5CA3] md:px-4 md:py-2 md:text-base', className)}>{title}</div>
}
