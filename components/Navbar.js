import Link from "next/link"
import Logo from "./Logo"
import Button from "./Button"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between gap-5 py-3 maxContainer paddingContainer border-b border-secondary-300">

            <div className="flex gap-8 items-center justify-center">
                <Logo />
                <ul className="hidden min-910:flex items-center justify-center gap-8">
                    <li><Link className="text-sm text-secondary-800" href={'#'}>Features</Link></li>
                    <li><Link className="text-sm text-secondary-800" href={'#'}>Case Studies</Link></li>
                    <li><Link className="text-sm text-secondary-800" href={'#'}>Pricing</Link></li>
                    <li><Link className="text-sm text-secondary-800" href={'#'}>Applications</Link></li>
                </ul>
            </div>

            <div className="hidden min-454:flex gap-2 items-center justify-center">
                <Button variant={'btn-hollow'}>Get a demo</Button>
                <Button variant={'btn-primary'}>Start your free trial</Button>
            </div>
        </nav>
    )
}
