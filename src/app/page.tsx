export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background SVG */}
      <div 
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/bgleaves.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
    </main>
  )
}
