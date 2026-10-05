export const newsPosts = [
    {
        slug: "building-toward-alpha-1",
        title: "Building toward Octlitch 1.0 Alpha 1",
        date: "October 5, 2026",
        summary:
            "Octlitch is approaching its first public alpha with a working installer, KDE Plasma desktop, documentation and package management.",
        content: [
            {
                heading: "The first public release is taking shape",
                paragraphs: [
                    "Octlitch has reached the point where the core system, installer and desktop experience are working together as a complete distribution.",
                    "The project is based on Fedora and KDE Plasma, with Octlitch providing its own branding, themes, defaults and system configuration.",
                ],
            },
            {
                heading: "What is working",
                paragraphs: [
                    "The current development image boots into the Octlitch live environment and can be installed to disk using the included installer.",
                    "KDE Plasma is configured with the Octlitch desktop experience, four included themes and a focused set of default applications.",
                    "System packages are managed through DNF, while Discover and Flathub provide a graphical way to install desktop applications.",
                ],
            },
            {
                heading: "Documentation",
                paragraphs: [
                    "The Octlitch Handbook now covers installation, package management, hardware support, Steam, Proton and common troubleshooting steps.",
                    "The handbook is designed to remain straightforward and technical rather than becoming another marketing section of the website.",
                ],
            },
            {
                heading: "Before Alpha 1",
                paragraphs: [
                    "There is still testing to complete before Octlitch 1.0 Alpha 1 is published.",
                    "The remaining work includes installation testing, hardware checks, release verification, final website work and preparing the public ISO download.",
                ],
            },
        ],
    },

    {
        slug: "welcome-to-octlitch",
        title: "Welcome to Octlitch",
        date: "October 5, 2026",
        summary:
            "A short introduction to the goals behind Octlitch and the kind of Linux desktop it is trying to build.",
        content: [
            {
                heading: "A focused Linux desktop",
                paragraphs: [
                    "Octlitch is a Fedora-based Linux distribution built around KDE Plasma.",
                    "The goal is to create a fast, polished desktop with carefully chosen defaults while keeping the underlying Linux system familiar and accessible.",
                ],
            },
            {
                heading: "Fedora underneath",
                paragraphs: [
                    "Octlitch keeps Fedora as its technical foundation rather than replacing the parts that already work well.",
                    "Fedora repositories, DNF, systemd, SELinux and the standard Linux stack remain part of the system.",
                ],
            },
            {
                heading: "An Octlitch experience on top",
                paragraphs: [
                    "The desktop, artwork, themes, application choices and user-facing configuration are built specifically for Octlitch.",
                    "The project aims to keep the base system lean without turning the desktop into a stripped-down environment.",
                ],
            },
        ],
    },
];
