import { Button } from "@/components/ui/button"
import { Shield, Database, Lock } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-primary">Secure Your Identity on the Blockchain</h1>
        <p className="text-xl mb-8 text-muted-foreground">
          Join the future of digital identity verification. Our blockchain-based system ensures your data remains secure
          and under your control.
        </p>
        <Button asChild className="bg-accent hover:bg-accent/90 text-white">
          <Link href="/register">Get Started</Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-card rounded-lg shadow-lg border border-primary/20">
          <Shield className="mx-auto mb-4 h-12 w-12 text-accent" />
          <h2 className="text-2xl font-semibold mb-2 text-primary">Secure</h2>
          <p className="text-muted-foreground">
            Your data is encrypted and stored on the blockchain, ensuring maximum security.
          </p>
        </div>
        <div className="text-center p-6 bg-card rounded-lg shadow-lg border border-primary/20">
          <Database className="mx-auto mb-4 h-12 w-12 text-accent" />
          <h2 className="text-2xl font-semibold mb-2 text-primary">Decentralized</h2>
          <p className="text-muted-foreground">No central authority controls your identity. You're in charge.</p>
        </div>
        <div className="text-center p-6 bg-card rounded-lg shadow-lg border border-primary/20">
          <Lock className="mx-auto mb-4 h-12 w-12 text-accent" />
          <h2 className="text-2xl font-semibold mb-2 text-primary">Private</h2>
          <p className="text-muted-foreground">
            Share only what you want. Our system gives you granular control over your data.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">How It Works</h2>
        <p className="text-center mb-8 text-muted-foreground">
          Our blockchain identity system is designed to be simple, secure, and user-friendly. Here's how you can get
          started:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Register your identity by providing your document ID and a profile picture.",
            "Your information is securely encrypted and stored on the blockchain.",
            "Authorized users can verify your identity without accessing your personal data.",
            "You maintain full control over your identity and can revoke access at any time.",
          ].map((step, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-lg shadow-lg border border-primary/20">
              <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {index + 1}
              </div>
              <p className="text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <Button asChild className="bg-accent hover:bg-accent/90 text-white">
          <Link href="/register">Register Now</Link>
        </Button>
      </div>
    </div>
  )
}

