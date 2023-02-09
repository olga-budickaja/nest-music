import React from 'react';
import Navbar from "@/components/Navbar";
import {Container, createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/system";

type Props = {
    children?: React.ReactNode
}

const MainLayout: React.FC<Props> = ({children}) => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#022859',
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Navbar/>
                <Container maxWidth="xl" sx={{ minHeight: '100vh', marginTop: '120px' }}>
                    {children}
                </Container>
            </ThemeProvider>
        </>
    );
};

export default MainLayout;