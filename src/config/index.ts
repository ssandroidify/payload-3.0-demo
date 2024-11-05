export const ARTICLE_CATEGORIES = [
  {
    label: "Articles",
    value: "articles" as const,
    featured: [
      {
        name: "Regions",
        href: `/articles?category=region`,
        imageSrc: "/nav/city/bhopal.jpg",
      },
      {
        name: "Events",
        href: `/articles?category=event`,
        imageSrc: "/nav/events/picks.jpg",
      },
    ],
  },
  {
    label: "Activities",
    value: "activities" as const,
    featured: [
      {
        name: "Upcoming events",
        href: `/formsList`,
        imageSrc: "/nav/events/upcoming-events.jpg",
      },
    ],
  },
];

export const TRANSACTION_FEE = 80;
export const CURRENCY = "INR";

export const UserType = {
  ADMIN: "admin",
  VOLUNTEER: "volunteer",
  USER: "user",
};
