export const newsPosts = [
{
    slug: "octlitch-1-0-alpha-1-released",
    title: "Octlitch 1.0 Alpha 1 is here",
    date: "October 6, 2026",
    summary:
        "The first public Octlitch release is now available to download, test and install.",
    content: [
        {
            heading: "The first public release",
            paragraphs: [
                "Octlitch 1.0 Alpha 1 is now available as the project's first public installation image.",
                "This release marks the point where the live environment, installer, KDE Plasma desktop, package management and documentation are all working together as a complete Octlitch system.",
            ],
        },
        {
            heading: "What is included",
            paragraphs: [
                "Octlitch is built on Fedora with KDE Plasma and keeps the underlying Fedora system accessible instead of hiding it behind a custom package layer.",
                "The release includes the Octlitch desktop configuration, four curated themes, LibreWolf, KDE Discover, Flatpak and Flathub.",
                "System packages are managed with DNF, while Discover is focused on Flatpak desktop applications.",
            ],
        },
        {
            heading: "Hardware and gaming",
            paragraphs: [
                "AMD and Intel graphics use the drivers provided by the Fedora kernel and Mesa stack.",
                "Proprietary NVIDIA drivers are not bundled into the ISO. Octlitch instead provides a post-install helper for users who choose to install them.",
                "Steam can be installed from Flathub, while Steam itself manages Proton and its compatibility tools.",
            ],
        },
        {
            heading: "Documentation",
            paragraphs: [
                "The Octlitch Handbook is available on the website and covers installation, package management, graphics hardware, Steam, Proton and troubleshooting.",
                "The documentation will continue to grow as Octlitch develops.",
            ],
        },
        {
            heading: "Download Alpha 1",
            paragraphs: [
                "Octlitch 1.0 Alpha 1 is available from the official Octlitch download page together with its SHA256 checksum.",
                "This is an alpha release and is intended for testing and feedback. Back up important data before installing it on physical hardware.",
            ],
        },
        {
            heading: "Thank you for testing Octlitch",
            paragraphs: [
                "If you find an Octlitch-specific problem, please report it through the project's GitHub issue tracker.",
                "Feedback from Alpha 1 will help shape the next Octlitch release.",
            ],
        },
    ],
},
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
