export const headerData = {
    links: [
        {
            text: "Home",
            href: `${import.meta.env.BASE_URL}`
        },
        {
            text: "About Us",
            href: `${import.meta.env.BASE_URL}about`
        },
        {
            text: "Solutions",
            links: [
                {
                    text: "Homeschool",
                    href: `${import.meta.env.BASE_URL}pawpaw`
                },
            ],
        },
        {
            text: "Contact",
            href: `${import.meta.env.BASE_URL}contact`
        },
    ]
}

