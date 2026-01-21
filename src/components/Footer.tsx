export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4 font-semibold text-white">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                C
              </div>
              CA MONK
            </div>
            <p className="text-sm text-slate-400">
              Empowering the next generation of financial leaders with tools,
              community, and knowledge.
            </p>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Webinars</li>
              <li>Case Studies</li>
            </ul>
          </div>

          {/* PLATFORM */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">PLATFORM</h4>
            <ul className="space-y-2 text-sm">
              <li>Job Board</li>
              <li>Practice Tests</li>
              <li>Mentorship</li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">CONNECT</h4>
            <ul className="space-y-2 text-sm">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2024 CA Monk. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
