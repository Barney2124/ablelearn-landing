import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-gray-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold text-[#2e92fe]">AbleLearn</span>

            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#engines" className="hover:text-[#2e92fe]">Features</a>
              <a href="#how" className="hover:text-[#2e92fe]">How it works</a>
              <a href="#teachers" className="hover:text-[#2e92fe]">For teachers</a>
              <a href="#faq" className="hover:text-[#2e92fe]">FAQ</a>
            </div>

            <a
              href="#waitlist"
              className="hidden md:block bg-[#2e92fe] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2e92fe]/90"
            >
              Join waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-14 bg-[#E1F0FF] rounded-3xl shadow-sm mb-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <div className="mb-5">
            <span className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-[#2e92fe]">
              🎓 Built for teachers and exam-age learners
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Master what matters.{" "}
            <span className="text-[#2e92fe]">Lose the busywork.</span>
          </h1>

          <p className="text-xl mb-8 max-w-xl text-gray-700">
            AbleLearn helps teachers create high-quality learning materials in
            minutes — and helps students revise the things they actually need to
            remember. Less planning, less chasing, more real progress.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#waitlist"
              className="px-10 py-4 bg-[#2e92fe] text-white font-semibold rounded-[35px] text-lg hover:bg-[#2e92fe]/90 shadow transition"
            >
              Join the early access waitlist
            </a>
            <a
              href="#how"
              className="px-10 py-4 text-[#2e92fe] font-medium underline text-lg"
            >
              See how it works
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Launching 2026 • Limited school pilots available
          </p>
        </div>

        {/* Mascot */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72">
            <Image
              src="/mascots/HomeMascot.png"
              alt="AbleLearn mascot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* FOUR ENGINES */}
      <section id="engines" className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-center mb-6">
          Four engines. One learning platform.
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          A complete toolkit for teachers — and a motivating experience for
          students. Every engine works alone, but they’re strongest together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Revise */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-xl mb-2">Revise</h3>
            <p className="text-gray-600 text-sm">
              A mastery engine that helps students actually remember what they
              learn by targeting weak areas, not repeating what they already
              know.
            </p>
          </div>

          {/* Games */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="font-semibold text-xl mb-2">Games</h3>
            <p className="text-gray-600 text-sm">
              Fast, curriculum-aligned learning games that turn revision into
              something students will genuinely do — not something teachers must
              chase them for.
            </p>
          </div>

          {/* Learn */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-semibold text-xl mb-2">Learn</h3>
            <p className="text-gray-600 text-sm">
              A full course builder where teachers create step-by-step lessons,
              quizzes and activities in minutes, with AI support when they want
              it.
            </p>
          </div>

          {/* AI Tutor */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold text-xl mb-2">AI Tutor</h3>
            <p className="text-gray-600 text-sm">
              A guided assistant that follows the teacher’s objectives, explains
              concepts clearly, and only lets students progress once they’ve
              genuinely understood.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-center mb-6">
          How AbleLearn works
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          For students it feels like a game. For teachers it feels like finally
          getting your time back.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#2e92fe] text-white flex items-center justify-center text-2xl font-bold mb-4">
              1
            </div>
            <h3 className="font-semibold mb-2">Set goals</h3>
            <p className="text-gray-600 text-sm">
              Teachers choose subjects, topics or exam boards — or students pick
              their own path.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#22C55E] text-white flex items-center justify-center text-2xl font-bold mb-4">
              2
            </div>
            <h3 className="font-semibold mb-2">Build materials</h3>
            <p className="text-gray-600 text-sm">
              Create revision sets, games or full courses manually or with AI —
              all in minutes.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#9B5DE5] text-white flex items-center justify-center text-2xl font-bold mb-4">
              3
            </div>
            <h3 className="font-semibold mb-2">Track mastery</h3>
            <p className="text-gray-600 text-sm">
              Students earn XP, fix mistakes, and build mastery you can actually
              see.
            </p>
          </div>
        </div>
      </section>

      {/* TEACHER BENEFITS */}
      <section id="teachers" className="max-w-5xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-center mb-8">
          Built for teachers first
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow border text-sm text-gray-700">
            <strong className="text-gray-900">Create materials fast.</strong>
            <p className="mt-2">
              Turn a topic into revision, games or a full course in minutes —
              not hours spent planning after school.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border text-sm text-gray-700">
            <strong className="text-gray-900">See real learning.</strong>
            <p className="mt-2">
              Mastery scores and mistake-tracking show what students actually
              understand — not just what they clicked through.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border text-sm text-gray-700">
            <strong className="text-gray-900">Improve engagement.</strong>
            <p className="mt-2">
              XP, streaks and games keep students revising without teachers
              constantly pushing them.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-center mb-10">FAQ</h2>

        <div className="space-y-6 text-sm">
          <details className="bg-white p-6 rounded-xl shadow border">
            <summary className="font-semibold cursor-pointer">
              Is AbleLearn live yet?
            </summary>
            <p className="mt-2 text-gray-700">
              Not yet. We're preparing early pilots for 2025 with a wider launch
              in 2026.
            </p>
          </details>

          <details className="bg-white p-6 rounded-xl shadow border">
            <summary className="font-semibold cursor-pointer">
              Who is AbleLearn for?
            </summary>
            <p className="mt-2 text-gray-700">
              Our first focus is secondary schools and exam-age students. The
              system adapts easily for colleges and tutors too.
            </p>
          </details>

          <details className="bg-white p-6 rounded-xl shadow border">
            <summary className="font-semibold cursor-pointer">
              Is it meant to replace teachers?
            </summary>
            <p className="mt-2 text-gray-700">
              No. AbleLearn removes repetitive work so teachers can spend more
              time actually teaching — not marking or planning late at night.
            </p>
          </details>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-r from-[#2e92fe] to-[#1e70d9] rounded-3xl p-12 text-center text-white shadow">
          <h2 className="text-3xl font-bold mb-4">
            Want early access to AbleLearn?
          </h2>
          <p className="mb-8 text-white/90 max-w-xl mx-auto">
            Join the early access list for updates, pilots and school trials as
            we open the platform.
          </p>

          <form
            action="mailto:ablelearn2@gmail.com"
            method="post"
            encType="text/plain"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="flex-1 rounded-full px-4 py-3 text-gray-900 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full px-6 py-3 font-semibold bg-black/80 text-white hover:bg-black transition"
            >
              Join waitlist
            </button>
          </form>

          <p className="mt-3 text-xs text-white/80">
            Uses your email app to send the message — no spam, ever.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white py-6 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>&copy; {new Date().getFullYear()} AbleLearn. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="https://x.com/AbleLearnHQ" target="_blank" className="hover:text-[#2e92fe]">
              X (Twitter)
            </a>
            <a href="https://www.linkedin.com/company/ablelearn/about/" target="_blank" className="hover:text-[#2e92fe]">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-[#2e92fe]">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}