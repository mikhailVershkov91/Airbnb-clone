"use client";

import { useRouter } from "next/navigation";
import { Heading } from "./Heading";
import { Button } from "./Button";

interface Props {
	title?: string;
	subtitle?: string;
	showReset?: boolean;
}

export const EmptyState: React.FC<Props> = ({
	title = "No exact matches",
	subtitle = "Try changing or removing some of your filters",
	showReset,
}) => {
	const router = useRouter();

	return (
		<div className="h-[60vh] flex flex-col items-center justify-center gap-2">
			<Heading title={title} subtitle={subtitle} center />
			<div className="w-48 mt-4">
				<Button
					outline
					label="Remove all filters"
					onClick={() => router.push("/")}
				/>
			</div>
		</div>
	);
};
