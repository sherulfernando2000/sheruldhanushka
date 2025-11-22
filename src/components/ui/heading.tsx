type HeadingProps = {
    title?: string;
    subTitle?: string;
};

export default function Heading({ title, subTitle }: HeadingProps) {
    return (
        //container
        <div className="pl-6 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-16 sm:my-14 ">
            <div className="lg:pl-20 xl:pl-56">
                {title && (
                    <div className='text-base mb-6 sm:mb-8 font-medium'>
                        {title}
                      
                    </div>
                )}

                {subTitle && (
                    <div className='font-cormorant text-2xl mb-6 sm:mb-8 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 
                                   w-full sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[600px] 
                                   leading-relaxed break-words'
                            
                    >
                        {subTitle}
                       
                    </div>
                )}
            </div>
        </div>
    );
}