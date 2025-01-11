import Link from "next/link";

export default function Topbar() {
  return (
    <div className="flex mt-3 items-center justify-between paddingContainer maxContainer text-xs">
        <div className="flex items-center justify-center gap-3">
            <Link className="text-secondary-600" href={'#'}>English</Link>
            <Link className="text-secondary-600" href={'#'}>Support</Link>
        </div>
        <div className="flex items-center justify-center gap-3">
            <Link className="text-secondary-600" href={'#'}>Blog</Link>
            <Link className="text-secondary-600" href={'#'}>About Us</Link>
        </div>
    </div>
  )
}
