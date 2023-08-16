import { CarouselInterface } from "./interface";
import { ServicesInterface } from "./interface";
import { GalleryInterface } from "./interface";
import { ExpertTeamInterface } from "./interface";
import { TestimonialInterface } from "./interface";
import { OurBlogsInterface } from "./interface";

import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import HairCut from "../assets/HairCut.png";
import HairDry from "../assets/HairDry.png";
import Facial from "../assets/Facial.png";
import BodyMassage from "../assets/BodyMasage.png";
import comb from "../assets/comb.png";
import backGround from "../assets/backGround.png";

import hairstyle from "../assets/hairstyle.png";
import haircut1 from "../assets/haircut1.png";
import bodyrelax from "../assets/bodyrelax.png";
import hairwash from "../assets/hairwash.png";
import salon from "../assets/salon.png";
import hairstyle1 from "../assets/hairstyle1.png";

import salonGirl from "../assets/salonGirl.png";
import salonBoy from "../assets/salonBoy.png";

import girlProfile from "../assets/girlProfile.png";
import boyProfile from "../assets/boyProfile.png";

import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";

export const ListMenu = [
  "Home",
  "About Us",
  "Offers",
  "Services",
  "Gallery",
  "Team",
  "Testimonials",
  "Blog",
];

export const CarouselData: CarouselInterface[] = [
  {
    id: "1",
    heading: "Collection Hair And Beard",
    para:
      "Here Are Many Variations of Passages of Lorem Ipsum Available,But The Majority Suffered",

    image: Image1,
    buttonText: "See All Services",
  },
  {
    id: "2",
    heading: "Best Facial",
    para:
      "Here Are Many Variations of Passages of Lorem Ipsum Available,But The Majority Suffered",

    image: Image2,
    buttonText: "See All Services",
  },
  {
    id: "3",
    heading: "Collection Hair And Beard",
    para:
      "Here Are Many Variations of Passages of Lorem Ipsum Available,But The Majority Suffered",

    image: Image1,
    buttonText: "See All Services",
  },
  {
    id: "4",
    heading: "Best Facial",
    para:
      "Here Are Many Variations of Passages of Lorem Ipsum Available,But The Majority Suffered",

    image: Image2,
    buttonText: "See All Services",
  },
];

export const ServicesData: ServicesInterface[] = [
  {
    id: "1",
    heading: "Hair Cut",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    image: HairCut,
    color: "red",
    img1: comb,
    backGround: backGround,
  },
  {
    id: "2",
    heading: "Body Massage",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    image: BodyMassage,
    color: "green",
    img1: comb,
    backGround: backGround,
  },
  {
    id: "3",
    heading: "Hair Dry",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    image: HairDry,
    color: "blue",
    img1: comb,
    backGround: backGround,
  },
  {
    id: "4",
    heading: "Facial",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    image: Facial,
    color: "orange",
    img1: comb,
    backGround: backGround,
  },
  {
    id: "5",
    heading: "Hair Cut",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    image: HairCut,
    color: "red",
    img1: comb,
    backGround: backGround,
  },
  {
    id: "6",
    heading: "Body Massage",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    image: BodyMassage,
    color: "green",
    img1: comb,
    backGround: backGround,
  },
  {
    id: "7",
    heading: "Hair Dry",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    image: HairDry,
    color: "blue",
    img1: comb,
    backGround: backGround,
  },
  {
    id: "8",
    heading: "Facial",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    image: Facial,
    color: "orange",
    img1: comb,
    backGround: backGround,
  },
];

export const GalleryData: GalleryInterface[] = [
  {
    image: hairstyle,
  },
  {
    image: haircut1,
  },
  {
    image: bodyrelax,
  },
  {
    image: hairwash,
  },
  {
    image: salon,
  },
  {
    image: hairstyle1,
  },
];

export const ExpertTeamData: ExpertTeamInterface[] = [
  {
    id: "1",
    image: salonGirl,
    heading: "Jame Franco",
    paragraph: "hiarcut specialists",
  },
  {
    id: "2",
    image: salonBoy,
    heading: "Jame Franco",
    paragraph: "hiarcut specialists",
  },
  {
    id: "3",
    image: salonBoy,
    heading: "Jame Franco",
    paragraph: "hiarcut specialists",
  },
  {
    id: "4",
    image: salonBoy,
    heading: "Jame Franco",
    paragraph: "hiarcut specialists",
  },
];

export const TestimonialData: TestimonialInterface[] = [
  {
    id: "1",

    image: boyProfile,
    name: "Tony Shaw",
    head: "Customer",
  },
  {
    id: "2",

    image: girlProfile,
    name: "Jenny Shaw",
    head: "Customer",
  },
  {
    id: "3",

    image: boyProfile,
    name: "Jenny Shaw",
    head: "Customer",
  },
  {
    id: "4",

    image: girlProfile,
    name: "Tonnyt Low",
    head: "Customer",
  },
];

export const OurBlogsData: OurBlogsInterface[] = [
  {
    image: photo1,
    month: "25",
    monthName: "June",
    title: "Men Haircut New Style",
    paragraph:
      "lorem ipsum dolor sit amet,cadipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    image: photo2,
    month: "19",
    monthName: "Oct",
    title: "Eyebrow Shapes",
    paragraph:
      "lorem ipsum dolor sit amet,cadipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    image: photo3,
    month: "15",
    monthName: "June",
    title: "Top 5 Benefits Facial",
    paragraph:
      "lorem ipsum dolor sit amet,cadipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
];
