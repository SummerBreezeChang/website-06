import Link from "next/link"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-6 pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-3">About</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Hi, I&apos;m Summer.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
            I design AI-powered products, brand systems, and client workflows for startups and founders.
            My work sits at the intersection of product thinking, visual clarity, and automation.
          </p>

          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <h2 className="text-xl font-bold mb-3">Work with me</h2>
            <p className="text-sm text-muted-foreground mb-6">
              If you are building an AI product, redesigning your website, or improving operations, I can
              help shape the strategy and execution.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </Link>
              <a
                href="/Summer-Chang-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-sm font-semibold hover:bg-muted transition-colors"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
