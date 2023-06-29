import { EmptyState } from "@/app/components/EmptyState";
import AuthProvider from "@/app/providers/AuthProvider";
import getCurrentUser from "../actions/getCurrentUser";
import { PropertiesClient } from "./PropertiesClient";
import getListings from "../actions/getListings";

const PropertiesPage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<AuthProvider>
				<EmptyState title="Unauthorized" subtitle="Please login" />
			</AuthProvider>
		);
	}

	const listings = await getListings({
		userId: currentUser?.id,
	});

	if (!listings?.length) {
		return (
			<AuthProvider>
				<EmptyState
					title="No properties found"
					subtitle="Looks like you have no properties"
				/>
			</AuthProvider>
		);
	}

	return (
		<AuthProvider>
			<PropertiesClient listings={listings} currentUser={currentUser} />
		</AuthProvider>
	);
};

export default PropertiesPage;
