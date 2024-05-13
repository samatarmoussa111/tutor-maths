import Icon from "../icon/icon";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  iconName?: LucideIcon;
  image?: string;
}

const AdventagesCard = ({ title, description, iconName, image }: Props) => {
  return (
    <div className=" w-full flex justify-between items-center gap-x-4 bg-card p-2 md:p-4 rounded-lg ">
      <div className="flex flex-row space-x-4">
        {iconName && <Icon iconName={iconName} />}

        {image && (
          <Image
            src={image}
            alt=""
            width={40}
            height={40}
            className="w-[40px] h-[40px]"
          />
        )}

        <div className="flex flex-col">
          <span className="text-foreground/90">{title}</span>

          <div className="flex flex-row space-x-2 items-center text-sm text-muted-foreground">
            <span> {description} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventagesCard;
