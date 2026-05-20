import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Brain,
  Workflow,
  Plug,
  Code2,
  CloudUpload,
  Sparkles,
  ShieldCheck,
  Target,
  Users,
  Lightbulb,
  Award,
  Handshake,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTA } from '@/components/sections/CTA'
import { TEAM } from '@/data/team'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Tekanthem is a pioneer in leveraging Artificial Intelligence to transform the way software is developed and deployed — empowering businesses with intelligent solutions.',
}

const KEY_OFFERINGS = [
  {
    icon: Brain,
    title: 'AI-Powered Applications',
    description:
      'We design and develop AI-driven applications tailored to your business needs, from predictive analytics to personalised user experiences.',
  },
  {
    icon: Workflow,
    title: 'Intelligent Automation',
    description:
      'Automate repetitive tasks and optimise workflows with our AI solutions, enabling your team to focus on higher-value activities.',
  },
  {
    icon: Plug,
    title: 'Integration',
    description:
      'Seamlessly integrate AI capabilities into your existing systems and applications, enhancing their functionality and performance.',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Our Custom Software Development services offer bespoke solutions crafted to meet the specific demands of your business.',
  },
  {
    icon: CloudUpload,
    title: 'Cloud Migration',
    description:
      'Our Cloud Migration services help your business efficiently and securely transition from on-premises infrastructure to the cloud.',
  },
] as const

const WHY_CHOOSE = [
  {
    icon: Sparkles,
    title: 'AI-First Philosophy',
    description:
      'We are dedicated to an AI-first approach, meaning that artificial intelligence is at the heart of everything we do — from conception to deployment.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Our team of AI researchers, data scientists, and software engineers brings together deep expertise and innovative thinking to deliver exceptional results.',
  },
] as const

const VALUES = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We continuously explore new ideas and technologies to stay ahead of the curve and deliver cutting-edge solutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description:
      'We operate with the highest level of professionalism and transparency, fostering trust with our clients and partners.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We are committed to delivering top-tier quality in every project we undertake.',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description:
      'We believe in the power of teamwork and work closely with our clients to achieve their goals.',
  },
] as const

/** Renders a team member's photo if provided, otherwise a clean initials avatar. */
function TeamAvatar({ name, image }: { name: string; image?: string }) {
  if (image) {
    return (
      <div className="relative h-28 w-28 overflow-hidden rounded-2xl ring-1 ring-ink-200">
        <Image
          src={image}
          alt={name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>
    )
  }
  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-accent-100 text-2xl font-bold text-ink-700 ring-1 ring-ink-200">
      {name
        .split(' ')
        .map((s) => s[0])
        .join('')}
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-page-head">
        <div className="container-pro">
          <SectionHeading
            eyebrow="About Us"
            title={
              <>
                Pioneering an{' '}
                <span className="gradient-text">AI-first</span> future of
                software
              </>
            }
            description="At Tekanthem, we are pioneers in leveraging Artificial Intelligence to transform the way software is developed and deployed. Our mission is to empower businesses with intelligent solutions that drive efficiency, innovation, and business growth."
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-block">
        <div className="container-pro grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="heading-3 mt-4">
              Intelligent solutions for a fast-moving world
            </h2>
            <p className="lead mt-5">
              At Tekanthem, we are pioneers in leveraging Artificial
              Intelligence to transform the way software is developed and
              deployed. Our mission is to empower businesses with intelligent
              solutions that drive efficiency, innovation, and business growth.
            </p>
          </div>
          {/* Image slot — drop a file in public/images/about/ and update src */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-100 via-ink-100 to-accent-100 ring-1 ring-ink-200">
            {/*
              To use a real photo:
              <Image src="/images/about/who-we-are.jpg" alt="Tekanthem team" fill className="object-cover" />
            */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Brain className="h-20 w-20 text-brand-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-block bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-ink-200 bg-white p-8">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink-900">
              Our Vision
            </h3>
            <p className="mt-3 text-ink-600 leading-relaxed">
              We envision a world where AI is at the core of every
              technological advancement, enabling seamless integration of
              intelligence into every aspect of software development. Our goal
              is to lead this transformation by making AI-first development the
              new standard in the industry.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-200 bg-white p-8">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-700 ring-1 ring-accent-200">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink-900">
              Our Mission
            </h3>
            <p className="mt-3 text-ink-600 leading-relaxed">
              Our mission is to deliver state-of-the-art AI-driven software
              solutions that solve complex problems, enhance user experiences,
              and unlock new opportunities for businesses across the globe. We
              are committed to pushing the boundaries of what&apos;s possible
              with AI, ensuring our clients stay ahead in an ever-evolving
              digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-block">
        <div className="container-pro">
          <SectionHeading
            eyebrow="What We Do"
            title="Smart, scalable and future-proof software"
            description="We specialise in creating intelligent, data-driven applications designed to learn, adapt, and improve over time. Our AI-first approach integrates machine learning, natural language processing, computer vision, and other advanced AI technologies into the fabric of software development."
          />
          <div className="mt-14">
            <h3 className="text-center font-display text-xl font-semibold text-ink-900">
              Our Key Offerings
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {KEY_OFFERINGS.map((o) => (
                <div
                  key={o.title}
                  className="rounded-2xl border border-ink-200 bg-white p-7 transition-all hover:border-brand-200 hover:shadow-card"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <o.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-5 text-lg font-semibold text-ink-900">
                    {o.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {o.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-block bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          <SectionHeading eyebrow="Why Choose Us" title="Built on expertise" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {WHY_CHOOSE.map((w) => (
              <div
                key={w.title}
                className="flex gap-4 rounded-2xl border border-ink-200 bg-white p-8"
              >
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <w.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink-900">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-ink-600 leading-relaxed">
                    {w.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-block">
        <div className="container-pro">
          <SectionHeading eyebrow="Our Values" title="What we stand for" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-ink-200 bg-white p-7"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-700 ring-1 ring-accent-200">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-block bg-ink-50/60 border-y border-ink-200/70">
        <div className="container-pro">
          <SectionHeading
            eyebrow="Our Team"
            title="The people behind Tekanthem"
            description="A leadership team that blends product vision, engineering depth, and a relentless focus on customers."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className={cn(
                  'flex flex-col items-center rounded-2xl border border-ink-200 bg-white p-7 text-center',
                )}
              >
                <TeamAvatar name={member.name} image={member.image} />
                <h3 className="mt-5 text-lg font-semibold text-ink-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-brand-700">{member.role}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-400">
            To add a photo for any team member, drop the image into{' '}
            <code className="rounded bg-ink-100 px-1.5 py-0.5 text-ink-600">
              public/images/team/
            </code>{' '}
            and set the{' '}
            <code className="rounded bg-ink-100 px-1.5 py-0.5 text-ink-600">
              image
            </code>{' '}
            field in{' '}
            <code className="rounded bg-ink-100 px-1.5 py-0.5 text-ink-600">
              src/data/team.ts
            </code>
            .
          </p>
        </div>
      </section>

      <CTA />
    </>
  )
}
