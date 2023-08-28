export const urls = {
    nav: {
        forParish: {name: "Dla Parafii", url: "/dla-parafii"},       
        forParishioners: {name: "Dla Parafian", url: "/dla-parafian"},
        aboutProgram: {name: "O programie", url: "/o-programie"},
        whyHelp: {name: "Dlaczego pomagamy", url: "/#dlaczego-pomagamy"},
        aboutUs: {name: "O nas", url: "/o-nas"},
        download: {name: "Do pobrania", url: "/do-pobrania"},
        kontakt: {name: "Kontakt", url: "#kontakt"}
    },
    carousel: [
        {url: "dla-parafii"},
        {url: "dla-parafian"},
        {url: "poradnik"},
        {url: "dobre-przyklady"},
        {url: "audyt-i-dotacje"}
    ]
}

export function getNavList(){
    return Object.values(urls.nav)
}