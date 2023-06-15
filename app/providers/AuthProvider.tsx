"use client";

import { SessionProvider } from "next-auth/react";

export interface Props {
	children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
	return <SessionProvider>{children}</SessionProvider>;
}
