import React from "react";
import { AppProps } from "next/app";
import { wrapper } from "@/redux/store";
import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import {  AnimateSharedLayout } from "framer-motion"
import theme from "@/utils/theme";
import EnvHelper from "@/helpers/env-helper";
import "../styles/globals.css"


const App: React.FC<AppProps> = ({ Component, pageProps, router}) => {
    EnvHelper.validateEnv();

    return <ThemeProvider theme={theme}>
        <AnimateSharedLayout>
            <SkeletonTheme color={theme.colors.lightBg} highlightColor={theme.colors.skeletonHighlight}>
                <Component {...pageProps} key={router.route} />
            </SkeletonTheme>
        </AnimateSharedLayout>
    </ThemeProvider>
}

export default wrapper.withRedux(App);
