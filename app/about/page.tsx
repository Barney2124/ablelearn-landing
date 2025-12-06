import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-gray-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-[#2e92fe]">
              AbleLearn
            </Link>

            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-[#2e92fe]">
                Home
              </Link>
              <a href="/#engines" className="hover:text-[#2e92fe]">
                Features
              </a>
              <a href="/#how" className="hover:text-[#2e92fe]">
                How it works
              </a>
              <a href="/#teachers" className="hover:text-[#2e92fe]">
                For teachers
              </a>
              <a href="/#faq" className="hover:text-[#2e92fe]">
                FAQ
              </a>
            </div>

            <a
              href="/#waitlist"
              className="hidden md:block bg-[#2e92fe] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2e92fe]/90"
            >
              Join waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto px-6 pb-20">
        <section className="bg-white rounded-3xl shadow-md px-8 sm:px-10 py-10 sm:py-12">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#2e92fe] mb-3">
            Founder story
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Why I Built AbleLearn
          </h1>

          <div className="space-y-5 text-[15px] leading-relaxed text-gray-800">
            <p>
              In school I was an obsessive note taker, and I would always take my
              work home with me. Not because lessons were easy for me, but because
              writing everything down was the only way I could hold onto the
              important parts.
            </p>

            <p>
              The truth is that I really struggled to focus in a typical
              classroom. There were too many distractions and too much noise. But
              when I got home with my notes and a quiet environment, I could
              finally focus. I would work through topics again and again. I
              refined what I understood and isolated what I did not. That was
              where the real learning happened for me.
            </p>

            <p>
              I remember wishing there was a system built around that idea.
              Something that gave targeted practice and structured repetition.
              Something that made learning clearer, faster, and more measurable.
            </p>

            <p>
              I even tried to build it myself. When I was in secondary school, I
              wrote a tiny Python program that would quiz me using spaced
              repetition until I reached what I called a &quot;perfect score&quot;. It
              was basic, but it worked. And I honestly believe it is the reason I
              achieved the grades I did, because the classroom environment alone
              was not enough for me.
            </p>

            <p>
              Years later, that idea stayed with me. I kept thinking about what
              would have helped me and what would help students today.
            </p>

            <p>
              What if every student had a tool that made revision precise and
              motivating?
              <br />
              What if teachers could build and assign that experience in minutes
              instead of hours?
              <br />
              And what if teachers could get clear AI summaries of student work
              instantly so they can understand weaknesses and assign precise work
              in seconds?
            </p>

            <p>That became AbleLearn.</p>

            <p>
              Today AbleLearn brings together everything I wished existed when I
              was a student:
            </p>

            <ul className="list-disc list-inside space-y-1 pl-1">
              <li>Revise for genuine mastery and fixing mistakes</li>
              <li>Learn for building full step by step courses</li>
              <li>
                Games to keep students engaged without teachers constantly chasing
                them
              </li>
              <li>
                AI Tutor to make sure understanding is real before moving on
              </li>
            </ul>

            <p>
              AbleLearn is not about cutting corners. It is about making learning
              clearer, faster, and more motivating for students and much easier
              for teachers to manage.
            </p>

            <p>
              It is the platform I tried to create for myself when I was younger.
              Now built properly, and built for every classroom.
            </p>
          </div>

          {/* SIGN-OFF */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Barney Conridge
              </p>
              <p className="text-xs text-gray-500">
                Creator of AbleLearn
              </p>
            </div>
            <p className="text-xs text-gray-500">
              If you&apos;re reading this and want to talk about pilots or ideas,
              you can reach me via ablelearn2@gmail.com
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}