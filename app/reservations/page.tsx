import { EmptyState } from "@/app/components/EmptyState";
import AuthProvider from "@/app/providers/AuthProvider";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import { ReservationsClient } from "./ReservationsClient";

const ReservationsPage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<AuthProvider>
				<EmptyState title="Unauthorized" subtitle="Please login" />
			</AuthProvider>
		);
	}

	const reservations = await getReservations({
		authorId: currentUser?.id,
	});

	if (!reservations.length) {
		return (
			<AuthProvider>
				<EmptyState
					title="No reservations found"
					subtitle="Looks like you haven't reservations on your property"
				/>
			</AuthProvider>
		);
	}

	return (
		<AuthProvider>
			<ReservationsClient reservations={reservations} currentUser={currentUser} />
		</AuthProvider>
	);
};

export default ReservationsPage;
