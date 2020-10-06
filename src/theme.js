import { theme } from "@chakra-ui/core";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        brand: {
    orange: "#ED8936",
    blue: "#4299E1",
    grey: "#A0AEC0",
        },
    },
}

export default customTheme;