import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { Globe, MapPin, Package, Archive, Briefcase, BarChart , HandshakeIcon } from "lucide-react";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Globe/>,
    text: "International Relocation",
    description:
    "We simplify the complexities of moving to a new country, handling everything from visas to customs clearance",
  },
  {
    icon: <MapPin/>,
    text: "Local Relocation:",
    description:
    "Moving within GCC region? Our local services ensure that every detail is taken care of,from packing to delivery at your new doorstep.",
  },
  {
    icon: <Package />,
    text: "Packing and Unpacking:",
    description:
    "We offer professional packing services to protect your valuables during transit and unpacking services to help you settle in quickly."
    ,
  },
  {
    icon: <Archive/>,
    text: "Storage Solution",
    description:
    " Need temporary storage? Our secure storage facilities ensure your items are safe and accessible whenever you need them."
    ,
  },
  {
    icon: <Briefcase />,
    text: "Corporate Relocation: ",
    description:
    "We cater to businesses relocating employees, offering tailored solutions to ensure a smooth transition for both the individual and the company.",
  },
  {
    icon: <HandshakeIcon />,
    text: "Customer Care",
    description:
      "Gain valuable insights into our Client service policy and behavior within our organization and how we keep our Client needs as our topmost priority and ensure their demands are fulfilled within the right time.",
  },
];

export const checklistItems = [
  {
    title: "Global Reach, Local Expertise: ",
    description:
    "We help you relocate anywhere in the world and within the GCC region, leveraging our global network of partners and in-depth local knowledge.",
  },
  {
    title: "End-to-End Solutions:",
    description:
    "From pre-move planning, logistics, packing, and transportation to settling into your new home, we take care of everything so you can focus on your new beginning.",
  },
  {
    title: "Reliable and Safe:",
    description:
    "With years of experience, we ensure that your belongings are handled with the utmost care. Our commitment to safety means peace of mind every step of the way.",
  },
  {
    title: "Personalized Service: ",
    description:
      "No two moves are the same. Our team will work with you to understand your requirements and provide solutions that match your needs, timeline, and budget.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://ipanacllc.com/", text: "1st website" },
  { href: "#", text: "2nd website" },
  { href: "#", text: "Immigration" },
  { href: "#", text: "Packing" },
  { href: "#", text: "...." },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: ".." },
  { href: "#", text: "..." },
  { href: "#", text: "...." },
  { href: "#", text: "....." },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "..." },
  { href: "#", text: "Jobs" },
];
