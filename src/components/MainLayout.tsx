interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <main className="flex h-5/6 flex-col items-center justify-between lg:mr-4 lg:h-full lg:flex-row lg:justify-normal 2xl:gap-20 ">
      {children}
    </main>
  )
}
