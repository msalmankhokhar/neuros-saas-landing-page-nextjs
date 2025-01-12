import Image from "next/image"

export default function Testemonial() {
    return (
        <div className={`min-w-[310px] h-[403] xs:min-w-[380px] xs:h-[494] flex flex-grow flex-col justify-end gap-10 px-6 py-4 border border-secondary-300 rounded-xl`}>
            <p className='text-lg font-medium text-secondary-1000 text-center'>
                {
                    `Project management is smoother with Neuros. Its dashboards provide a clear view of progress and areas of improvement.`
                }

            </p>
            <div className='flex flex-col items-center justify-center'>
                <div className='mb-3 w-[30px] h-[30px] rounded-full overflow-hidden flex justify-center relative items-center'>
                    <Image
                        src={'/img/avatar.png'}
                        alt='avatar'
                        fill
                    />
                </div>
                <h2 className='font-semibold'>Nathan D. Hall</h2>
                <p className='text-secondary-600'>Project Lead</p>
            </div>
        </div>
    )
}
