import Image from "next/image"
import BrandIcon from "./BrandIcon"

export default function Logo() {
    return (
        <div className="flex items-baseline gap-2">
            <span className="font-medium text-3xl">Neuros</span>
            <BrandIcon />
        </div>
    )
}
