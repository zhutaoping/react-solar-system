interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <main className="mainLayout flex h-5/6 flex-col items-center justify-between md:h-full md:flex-row md:justify-normal xl:mr-4 2xl:gap-32 ">
      {children}
    </main>
  )
}
