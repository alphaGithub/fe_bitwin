declare const preset: {
    content: never[];
    darkMode: ["class", string];
    theme: {
        extend: {
            colors: {
                white: string;
                black: string;
                brand: {
                    [k: string]: string;
                };
                blue: {
                    [k: string]: string;
                };
                green: {
                    [k: string]: string;
                };
                grey: {
                    [k: string]: string;
                };
                red: {
                    [k: string]: string;
                };
                yellow: {
                    [k: string]: string;
                };
                primary: {
                    DEFAULT: string;
                };
                neutral: {
                    [k: string]: string;
                };
                success: {
                    DEFAULT: string;
                };
                warning: {
                    DEFAULT: string;
                };
                error: {
                    DEFAULT: string;
                };
                info: {
                    DEFAULT: string;
                };
                background: string;
                surface: {
                    DEFAULT: string;
                    muted: string;
                };
                foreground: {
                    DEFAULT: string;
                    muted: string;
                };
                border: {
                    DEFAULT: string;
                    strong: string;
                };
                ring: string;
            };
            fontFamily: {
                sans: [string];
                display: [string];
                mono: [string];
            };
            fontSize: {
                display: [string, {
                    lineHeight: string;
                    fontWeight: string;
                }];
                h1: [string, {
                    lineHeight: string;
                    fontWeight: string;
                }];
                h2: [string, {
                    lineHeight: string;
                    fontWeight: string;
                }];
                h3: [string, {
                    lineHeight: string;
                    fontWeight: string;
                }];
                h4: [string, {
                    lineHeight: string;
                    fontWeight: string;
                }];
                "body-lg": [string, {
                    lineHeight: string;
                    fontWeight: string;
                }];
                body: [string, {
                    lineHeight: string;
                    fontWeight: string;
                }];
                "body-sm": [string, {
                    lineHeight: string;
                    fontWeight: string;
                }];
                caption: [string, {
                    lineHeight: string;
                    fontWeight: string;
                }];
            };
            borderRadius: {
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            boxShadow: {
                sm: string;
                md: string;
                lg: string;
            };
            keyframes: {
                "fade-in": {
                    from: {
                        opacity: string;
                    };
                    to: {
                        opacity: string;
                    };
                };
                "progress-indeterminate": {
                    "0%": {
                        left: string;
                    };
                    "100%": {
                        left: string;
                    };
                };
            };
            animation: {
                "fade-in": string;
                "progress-indeterminate": string;
            };
            transitionDuration: {
                fast: string;
                normal: string;
            };
        };
    };
};

export { preset as default };
