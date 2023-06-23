import { useRouter } from "next/navigation";
import { SafeUser } from "../types";
import { useLoginModal } from "./useLoginModal";
import { useCallback, useMemo } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface IUseFavorites {
	listingId: string;
	currentUser?: SafeUser | null;
}

export const useFavorites = ({ listingId, currentUser }: IUseFavorites) => {
	const router = useRouter();
	const loginModal = useLoginModal();

	const hasFavorited = useMemo(() => {
		const list = currentUser?.favoriteIds || [];

		return list.includes(listingId);
	}, [currentUser, listingId]);

	const toggleFavorite = useCallback(
		async (e: React.MouseEvent<HTMLDivElement>) => {
			e.stopPropagation();

			if (!currentUser) {
				return loginModal.onOpen();
			}

			try {
				let req;

				if (hasFavorited) {
					req = () => axios.delete(`/api/favorites/${listingId}`);
				} else {
					req = () => axios.post(`/api/favorites/${listingId}`);
				}

				await req();
				router.refresh();
				toast.success("Success");
			} catch (error) {
				toast.error("Something went wrong");
			}
		},
		[currentUser, router, hasFavorited, listingId, loginModal]
	);

	return {
		hasFavorited,
		toggleFavorite,
	};
};
