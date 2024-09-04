import Image from "next/image";

interface TextWithIcoinProps {
    text: React.ReactNode;
    icon?: string;
    title?: string;
    box?: boolean;
    boxClassName?: string;
    iconClassName?: string;
    titleClassName?: string;
    textClassName?: string;
    iconSize?: number;
}

const TextWithIcon = ({ text, icon, title, box, boxClassName, iconClassName, titleClassName, textClassName, iconSize=20 }: TextWithIcoinProps) => {
    return (
        <div className="flex items-center space-x-2">            
            {icon && <Image src={icon} alt="icon" width={iconSize} height={iconSize} className={iconClassName} />}
            {title && <p className={titleClassName}>{title}</p>}
            {box && <div className={`w-5 h-5 rounded-md ${boxClassName}`}></div>}
            <p className={textClassName}>{text}</p>
        </div>
    )
}

export default TextWithIcon;