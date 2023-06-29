import { EmptyState } from "@/app/components/EmptyState";
import AuthProvider from "@/app/providers/AuthProvider";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import { TripsClient } from "./TripsClient";

const TripsPage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<AuthProvider>
				<EmptyState title="Unauthorized" subtitle="Please login" />
			</AuthProvider>
		);
	}

	const reservations = await getReservations({
		userId: currentUser?.id,
	});

	if (!reservations.length) {
		return (
			<AuthProvider>
				<EmptyState
					title="No trips found"
					subtitle="Looks like you haven't reserved any trips"
				/>
			</AuthProvider>
		);
	}

	return (
		<AuthProvider>
			<TripsClient reservations={reservations} currentUser={currentUser} />
		</AuthProvider>
	);
};

export default TripsPage;
