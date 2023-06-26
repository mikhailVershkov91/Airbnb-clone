import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import { EmptyState } from "@/app/components/EmptyState";
import AuthProvider from "@/app/providers/AuthProvider";
import { ListingClient } from "./ListingClient";

interface IParams {
	listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
	const listing = await getListingById(params);
	const currentUser = await getCurrentUser();

	if (!listing) {
		return (
			<AuthProvider>
				<EmptyState />
			</AuthProvider>
		);
	}
	return (
		<AuthProvider>
			<ListingClient listing={listing} currentUser={currentUser} />
		</AuthProvider>
	);
};

export default ListingPage;
