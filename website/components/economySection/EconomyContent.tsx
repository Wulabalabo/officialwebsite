interface EconomyContentProps {
    title: string;
    titleNumber: string;
    titleDescription: string[];
    content: string;
    contentTitle: string;
}

const EconomyContent = ({ title, titleNumber, titleDescription, content, contentTitle }: EconomyContentProps) => {

    return (
        <div className="flex flex-col items-center justify-center space-y-10 p-5 border border-gray-300">
            <div className="uppercase flex lg:flex-row flex-col justify-between w-full space-y-5 lg:space-y-0">
                <p className="lg:text-3xl font-bold"><span className="font-bold text-red-600">{titleNumber}</span>{title}</p>
                <div className="flex flex-col lg:items-start lg:w-[50%] justify-center space-y-2">
                    {titleDescription.map((description, index) => (
                        <p className="lg:font-bold" key={index}>{description}</p>
                    ))}
                </div>
            </div>
            <p className="uppercase lg:text-2xl"><span className="font-bold">{contentTitle} :</span> {content}</p>
        </div>
    )
}

export default EconomyContent;