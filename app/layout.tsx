import { RegisterModal } from "./components/modals/RegisterModal";
import { Navbar } from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ToasterProvider } from "./providers/ToasterProvider";
import { LoginModal } from "./components/modals/LoginModal";
import AuthProvider from "./providers/AuthProvider";
import { RentModal } from "./components/modals/RentModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
	title: "Airbnb",
	description: "Airbnb clone (NEXT practice)",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<AuthProvider>
					<ToasterProvider />
					<RentModal />
					<LoginModal />
					<RegisterModal />
					<Navbar />
					<div className="pb-20 pt-28">{children}</div>
				</AuthProvider>
			</body>
		</html>
	);
}
