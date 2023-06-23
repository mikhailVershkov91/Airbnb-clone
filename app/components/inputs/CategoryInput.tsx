"use client";

import { IconType } from "react-icons";

interface Props {
	onClick: (value: string) => void;
	label: string;
	icon: IconType;
	selected?: boolean;
}

export const CategoryInput: React.FC<Props> = ({
	onClick,
	label,
	icon: Icon,
	selected,
}) => {
	return (
		<div
			onClick={() => onClick(label)}
			className={`
            rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer
            ${selected ? "border-black" : "border-neutral-200"}
      `}
		>
			<Icon size={30} />
			<div className="font-semibold">{label}</div>
		</div>
	);
};