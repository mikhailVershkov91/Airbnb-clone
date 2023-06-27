import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import { EmptyState } from "@/app/components/EmptyState";
import AuthProvider from "@/app/providers/AuthProvider";
import { ListingClient } from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface IParams {
	listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
	const listing = await getListingById(params);
	const currentUser = await getCurrentUser();
	const reservations = await getReservations(params);

	if (!listing) {
		return (
			<AuthProvider>
				<EmptyState />
			</AuthProvider>
		);
	}
	return (
		<AuthProvider>
			<ListingClient
				listing={listing}
				currentUser={currentUser}
				reservations={reservations}
			/>
		</AuthProvider>
	);
};

export default ListingPage;