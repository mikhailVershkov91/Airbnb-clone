import { RegisterModal } from "./components/modals/RegisterModal";
import { Navbar } from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ToasterProvider } from "./providers/ToasterProvider";
import { LoginModal } from "./components/modals/LoginModal";
import AuthProvider from "./providers/AuthProvider";

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
					<LoginModal />
					<RegisterModal />
					<Navbar />
					{children}
				</AuthProvider>
			</body>
		</html>
	);
}
