"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
	var cloudinary: any;
}

interface Props {
	value: string;
	onChange: (value: string) => void;
}

export const ImageUpload: React.FC<Props> = ({ value, onChange }) => {
	const handleUpload = useCallback(
		(result: any) => {
			onChange(result.info.secure_url);
		},
		// eslint-disable-next-line
		[]
	);

	return (
		<CldUploadWidget
			onUpload={handleUpload}
			uploadPreset="ka6sfrjd"
			options={{
				maxFiles: 1,
			}}
		>
			{({ open }) => {
				return (
					<div
						onClick={() => open?.()}
						className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col items-center justify-center gap-4 text-neutral-600"
					>
						<TbPhotoPlus size={50} />
						<div className="font-semibold text-lg">Click to upload</div>
						{value && (
							<div className="absolute inset-0 w-full h-full">
								<Image
									alt="Upload"
									fill
									src={value}
									style={{ objectFit: "cover" }}
								/>
							</div>
						)}
					</div>
				);
			}}
		</CldUploadWidget>
	);
};
