import { EmptyState } from "@/app/components/EmptyState";
import AuthProvider from "@/app/providers/AuthProvider";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import { FavoritesClient } from "./FavoritesClient";

const FavoritesPage = async () => {
	const currentUser = await getCurrentUser();
	const favoriteListings = await getFavoriteListings();

	if (!currentUser) {
		return (
			<AuthProvider>
				<EmptyState title="Unauthorized" subtitle="Please login" />
			</AuthProvider>
		);
	}

	if (!favoriteListings.length) {
		return (
			<AuthProvider>
				<EmptyState
					title="No favorites found"
					subtitle="Looks like you haven't favorite listings"
				/>
			</AuthProvider>
		);
	}

	return (
		<AuthProvider>
			<FavoritesClient listings={favoriteListings} currentUser={currentUser} />
		</AuthProvider>
	);
};

export default FavoritesPage;
