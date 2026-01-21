import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = ["Tools", "Practice", "Events", "Job Board", "Points"]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 font-semibold">
          <div className="h-8 w-8 rounded-md bg-primary text-white flex items-center justify-center">
            C
          </div>
          <span>CA MONK</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {navLinks.map(link => (
            <span
              key={link}
              className="cursor-pointer hover:text-foreground"
            >
              {link}
            </span>
          ))}
        </nav>

        {/* DESKTOP PROFILE */}
        <div className="hidden md:block">
          <Button size="sm">Profile</Button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-4 text-sm">
            {navLinks.map(link => (
              <div
                key={link}
                className="cursor-pointer text-muted-foreground hover:text-foreground"
              >
                {link}
              </div>
            ))}

            <Button className="w-full mt-2">Profile</Button>
          </div>
        </div>
      )}
    </header>
  )
}
