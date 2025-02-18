import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/white-gray-abstract-gradient-background_69286-550.jpg?t=st=1739889404~exp=1739893004~hmac=1b55d4ac91a5bed9c00216f26ac8575a720922b044374ad812523ffc60ff428d&w=1380')`, backgroundPosition:'center', backgroundSize:'cover'
      }} className="relative min-h-[100vh] bg-gray-50 flex items-center justify-center overflow-hidden">
      

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-block mb-6">
          <div className="bg-white border text-blue-600 rounded-lg shadow-lg px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 via-violet-600 to-red-600 text-transparent bg-clip-text">Next-Gen Automation</div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-[65px] font-bold tracking-tight mb-6">
          The only platform powered by{" "}
          <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-transparent bg-clip-text">
            advanced AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Make data-driven decisions with AI Insights.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 hover:scale-95 duration-300 transition-all">
            Request demo
          </Button>
          <Button size="lg" variant="outline" className="border-2 hover:bg-white rounded-lg shadow-lg hover:scale-95 duration-300 transition-all">
            Chat with Us
          </Button>
        </div>
      </div>
    </div>
  )
}

