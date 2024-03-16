import { facebook, instagram, twitter } from "../assets/icons";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#movies", label: "Movies" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const footerLinks = [
    {
        title: "Office",
        links: [
            { name: "Bashundhara R/A", link: "/" },
            { name: "Baridhara R/A", link: "/" },
            { name: "California", link: "/" },
            { name: "Abu Dhabi", link: "/" },
            { name: "Sydney", link: "/" },
            { name: "Dubai", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@martian.com", link: "customer@martian.com" },
            { name: "+8801704717819", link: "tel:+8801704717819" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];