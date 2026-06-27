import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4 py-20 max-w-md mx-auto">
      {/* Avatar */}
      <Image
        src="/avatar.jpg"
        alt="FeelYourWave"
        width={96}
        height={96}
        className="rounded-full object-cover"
        priority
        unoptimized
      />

      {/* Name */}
      <h1 className="text-2xl font-bold mb-1">FeelYourWave</h1>

      {/* Bio */}
      <p className="text-zinc-400 text-sm mb-8 text-center">
        Project 30 to 15 — A Chinese easy gainer cutting body fat with real food, iron, and long rides.
      </p>

      {/* Links */}
      <nav className="w-full flex flex-col gap-3">
        <a
          href="https://www.tiktok.com/@feelyourwave"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800"
        >
          TikTok
        </a>
        <a
          href="#youtube"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800"
        >
          YouTube
        </a>
      </nav>

      <a
        href="https://feelyourwave.com"
        className="mt-16 text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
      >
        feelyourwave.com
      </a>
    </main>
  );
}
