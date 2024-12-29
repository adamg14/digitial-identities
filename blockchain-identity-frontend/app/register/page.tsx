import RegistrationForm from '@/components/RegistrationForm'

export default function RegisterPage() {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
        Register Your Identity
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto text-center">
        Secure your digital identity on the blockchain. Fill out the form below to get started.
      </p>
      <RegistrationForm />
    </main>
  )
}

