import Cake1 from "../assets/Rectangle 29.png"
import Cake2 from "../assets/Rectangle 29 (1).png"
import Cake3 from "../assets/Rectangle 29 (2).png"
import Cake4 from "../assets/Rectangle 29 (3).png"

import Strawberry1 from '../assets/image_2.png';
import Strawberry2 from '../assets/image_3.png';
import Strawberry3 from '../assets/image_4.png';

export const products = [
  {
    title: "Red Cake",
    price: "200.000đ",
    img: Cake1,
    rating: 4.6,
    reviews: 135,
  },
  {
    title: "Full White Cake",
    price: "1.200.000đ",
    img: Cake2,
    rating: 4.6,
    reviews: 135,
  },
  {
    title: "Yellow Cake",
    price: "88.500đ",
    img: Cake3,
    rating: 4.6,
    reviews: 135,
  },
  {
    title: "Half White Cake",
    price: "700.000đ",
    img: Cake4,
    rating: 4.6,
    reviews: 135,
  },
];

export const productDetails = [
  {
    title: "Strawberry Shortcake",
    tag: ["100% strawberry","Egg cream", "hello se347", "hihi"],
    old_price: 200000,
    price: 125000,
    rating: 4.6,
    reviews: 135,
    effects: "Calming, Creative, Happy, Relaxing, Sleepy, Uplifting",
    relieve: "Anxiety, Arthritis, Chronic Pain, Depression, Fatigue, Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood Swings",
    aromas: "Chemical, Citrus, Earthy, Pungent, Sour",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.",
    img: [Strawberry1, Strawberry2, Strawberry3],
  },
];


export const commentsData = [
  {
    id: 1,
    author: "Michael Gough",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    date: "Feb. 8, 2022",
    content: "Very straight-to-point article. Really worth time reading. Thank you!",
    rating: 4,
  },
  {
    id: 2,
    author: "Jese Leos",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    date: "Feb. 12, 2022",
    content: "HELLLO",
    rating: 5,
  },
  {
    id: 3,
    author: "Bonnie Green",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    date: "Mar. 12, 2022",
    content: "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
    rating: 5,
  },
  // Thêm comment khác nếu cần
];