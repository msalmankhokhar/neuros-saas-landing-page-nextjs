import Image from "next/image"

export default function ApplicationCard() {
    return (
        <div className="flex flex-col max-w-[380px] border border-secondary-300 rounded-lg p-5 gap-3">
            <div className="flex flex-col gap-2">
                <Image alt='icon' src={'/icons/aidrivenforecasts.svg'} width={20} height={20} />
                <h2 className='font-bold'>AI-Driven Forecasts</h2>
            </div>
            <p className='text-sm text-secondary-700'>
                {`Harness Neuros's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions`}
            </p>
            <p className="font-semibold text-sm text-primary-600">Finance, Retail, E-commerce</p>
        </div>
    )
}
