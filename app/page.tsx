import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, PenLine, Search, Folder } from "lucide-react";
import hero from "@/app/public/hero.png";
import collaboration from "@/app/public/collaboration.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-2xl">Notate</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#faq"
          >
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8">
              <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your personal thinking space
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Write, organize, and bring your ideas to life. Notate is your
                  digital notebook, completely free forever.
                </p>
              </div>
              <div className="relative w-full max-w-3xl mx-auto">
                <Image
                  src={hero}
                  alt="Illustration of people organizing notes and ideas"
                  width={700}
                  height={350}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <Button className="h-11 px-8">
                Start Writing - Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Clean, focused writing experience
                </h2>
                <div className="space-y-6">
                  <FeatureItem
                    icon={<PenLine className="h-6 w-6" />}
                    title="Simple Note Taking"
                    description="Write and format your notes with our intuitive editor. No distractions, just pure writing."
                  />
                  <FeatureItem
                    icon={<Folder className="h-6 w-6" />}
                    title="Smart Organization"
                    description="Create a structure that works for you. Organize notes your way with folders and tags."
                  />
                  <FeatureItem
                    icon={<Search className="h-6 w-6" />}
                    title="Quick Search"
                    description="Find any note instantly with our powerful search feature."
                  />
                </div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src={collaboration}
                  alt="Notate interface preview"
                  fill
                  className="object-cover rounded-lg shadow-md"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-12">
              <FAQItem
                question="What is Notate?"
                answer="Notate is a simple, personal note-taking app that helps you organize your thoughts and ideas. It's designed for individual use, focusing on providing a clean and distraction-free writing experience."
              />
              <FAQItem
                question="Is Notate really free?"
                answer="Yes! Notate is completely free to use. We believe in providing a great note-taking experience without any cost to our users."
              />
              <FAQItem
                question="What features are included?"
                answer="Notate includes essential note-taking features like rich text editing, organizational tools (folders and tags), and powerful search capabilities. We're focused on providing a great individual note-taking experience."
              />
              <FAQItem
                question="How secure is my data?"
                answer="We take data security seriously. Your notes are encrypted and stored securely, ensuring that your personal thoughts and ideas remain private."
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Notate. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-none text-primary">{icon}</div>
      <div className="space-y-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">{question}</h3>
      <p className="text-gray-500 dark:text-gray-400">{answer}</p>
    </div>
  );
}
