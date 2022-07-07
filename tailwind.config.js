module.exports = {
    content: [
        "index.html",
        "webinar.html",
        "virtual_expo.html",
        "news.html",
        "event.html",
        "login.html",
        "register.html",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            colors: {
                primary: "#303C50",
                secondary: "#D0844C",
                tertiary: "#C0c6c2",
                fourth: "#14100C",
                dark: "#0f172a",
            },
            screens: {
                "2xl": "1320px",
            },
        },
    },
    plugins: [],
};