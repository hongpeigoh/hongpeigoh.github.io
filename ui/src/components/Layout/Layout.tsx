import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { viewportStyle } from "../../styles/Layout";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => (
	<Box sx={viewportStyle}>
		{/* <Header /> */}
		<Outlet />
		{/* <Footer /> */}
	</Box>
);
