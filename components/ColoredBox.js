import MotionDiv from "./MotionDiv"

export default function ColoredBox({ animated=false, bg= 'bg-hero-pattern', aspectRatio=true, children, center=true, padding='sm:py-36 lg:py-40' }) {
    if (animated) {
        return (
            <MotionDiv className={`bg-primary-600 ${aspectRatio && 'aspect-[14/9] sm:aspect-auto'} ${padding} bg-pattern ${bg} rounded-xl flex ${center && 'items-center'} justify-center self-stretch`}>
                {children}
            </MotionDiv>
        )
    } else {
        return (
            <div className={`bg-primary-600 ${aspectRatio && 'aspect-[14/9] sm:aspect-auto'} ${padding} bg-pattern ${bg} rounded-xl flex ${center && 'items-center'} justify-center self-stretch`}>
                {children}
            </div>
        )
        
    }
}
