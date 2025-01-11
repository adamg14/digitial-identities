import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Users, Lock } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          Secure Your Identity on the Blockchain
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Join the future of digital identity verification. Our blockchain-based system ensures your data remains secure and under your control.
        </p>
        <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
          <Link href="/register">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Shield, title: "Secure", description: "Your data is encrypted and stored on the blockchain, ensuring maximum security." },
          { icon: Users, title: "Decentralized", description: "No central authority controls your identity. You're in charge." },
          { icon: Lock, title: "Private", description: "Share only what you want. Our system gives you granular control over your data." },
        ].map((feature, index) => (
          <div key={index} className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors">
            <feature.icon className="h-12 w-12 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* How It Works Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Our blockchain identity system is designed to be simple, secure, and user-friendly. Here's how you can get started:
        </p>
        <ol className="text-left max-w-2xl mx-auto space-y-4">
          <li className="flex items-center space-x-3">
            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
            <span>Register your identity by providing your document ID and a profile picture.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
            <span>Your information is securely encrypted and stored on the blockchain.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
            <span>Authorized users can verify your identity without accessing your personal data.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
            <span>You maintain full control over your identity and can revoke access at any time.</span>
          </li>
        </ol>
        <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 mt-4">
          <Link href="/register">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>
    </main>
  )
}

