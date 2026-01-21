import { Share2, ThumbsUp, MessageSquare } from "lucide-react"

export default function BlogArticle() {
  return (
    <article className="max-w-3xl mx-auto bg-white rounded-xl p-6 space-y-6">

      {/* TOP META */}
      <div className="text-sm text-muted-foreground flex items-center gap-2">
        <span className="text-primary font-medium uppercase">Finance</span>
        <span>• 5 min read</span>
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold leading-tight">
        The Future of Fintech in 2024
      </h1>

      {/* SHARE BUTTON */}
      <button className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition">
        <Share2 size={16} />
        Share Article
      </button>

      {/* INFO CARDS */}
      <div className="grid grid-cols-3 gap-4 bg-muted/40 rounded-lg p-4 text-center text-sm">
        <div>
          <p className="text-xs text-muted-foreground">CATEGORY</p>
          <p className="font-medium">Fintech & AI</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">READ TIME</p>
          <p className="font-medium">5 Mins</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">DATE</p>
          <p className="font-medium">Oct 24, 2023</p>
        </div>
      </div>

      {/* INTRO */}
      <p className="text-muted-foreground leading-relaxed">
        The intersection of finance and technology has never been more vibrant.
        As we look towards 2024, the role of the Chartered Accountant is evolving
        from mere bookkeeping to strategic financial analysis powered by AI.
      </p>

      {/* SECTION */}
      <h2 className="text-xl font-semibold">
        The Rise of Automated Accounting
      </h2>

      <p className="text-muted-foreground leading-relaxed">
        Automation is no longer a buzzword; it's a reality. Routine tasks like
        data entry, reconciliation, and payroll processing are being automated
        at an unprecedented pace. This shift allows finance professionals to
        focus on high-value activities such as:
      </p>

      {/* LIST */}
      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
        <li>Strategic financial planning and analysis (FP&amp;A).</li>
        <li>Risk management and compliance auditing.</li>
        <li>Advisory services for business growth and sustainability.</li>
      </ul>

      {/* SECTION */}
      <h2 className="text-xl font-semibold">
        Blockchain: Beyond Cryptocurrency
      </h2>

      <p className="text-muted-foreground leading-relaxed">
        While Bitcoin grabs the headlines, the underlying technology—blockchain—
        is quietly revolutionizing auditing. The immutable ledger provides a
        "single source of truth" that could potentially eliminate the need for
        sampling in audits, allowing for 100% verification of transactions.
      </p>

      {/* QUOTE */}
      <blockquote className="border-l-4 border-primary bg-primary/5 px-4 py-3 italic text-muted-foreground">
        "The accountant of the future will be a data scientist, a storyteller,
        and a strategic partner, all rolled into one."
      </blockquote>

      {/* SECTION */}
      <h2 className="text-xl font-semibold">
        Preparing for the Shift
      </h2>

      <p className="text-muted-foreground leading-relaxed">
        To stay relevant, CAs must upskill. Understanding Python for data
        analysis, mastering visualization tools like PowerBI, and getting
        comfortable with AI-driven ERP systems are now essential skills. The
        traditional syllabus provides the foundation, but continuous learning
        builds the career.
      </p>

      {/* AUTHOR */}
      <div className="flex items-center justify-between pt-6 border-t">
        <div className="flex items-center gap-3">
          <img
            src="/avatar.png"
            alt="Author"
            className="h-10 w-10 rounded-full"
          />
          <div className="text-sm">
            <p className="font-medium">Written by Arjun Mehta</p>
            <p className="text-muted-foreground">Senior Financial Analyst</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <ThumbsUp className="cursor-pointer hover:text-primary" />
          <MessageSquare className="cursor-pointer hover:text-primary" />
        </div>
      </div>

    </article>
  )
}
