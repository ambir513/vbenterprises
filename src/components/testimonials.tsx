import { TestimonialsSection } from "./testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Om Prakash",
      handle: "Builder",
      gender: "Male",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&facialHairType=BeardMedium&clotheType=BlazerShirt&skinColor=Brown",
    },
    text: "VB Enterprises delivered excellent waterproofing work on time. Even after the heavy rains, there were no leakages.",
    href: "https://twitter.com/omprakash_builder",
  },
  {
    author: {
      name: "Sunil Grimal",
      handle: "Business Man",
      gender: "Male",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&facialHairType=MoustacheMagnum&clotheType=Hoodie&eyeType=Wink&skinColor=Light",
    },
    text: "Their civil work team is highly skilled. The finishing and quality of materials exceeded our expectations.",
    href: "https://twitter.com/sunilgrimal_infra",
  },
  {
    author: {
      name: "Neha Kulkarni",
      handle: "Interior Designer",
      gender: "Female",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Round&hairColor=Black&clotheType=Blouse&eyeType=Default&skinColor=Brown",
    },
    text: "We hired VB Enterprises for interior renovation. The team was professional, responsive, and delivered great results.",
    href: "https://twitter.com/neha_interiors",
  },
  {
    author: {
      name: "Ravi Deshmukh",
      handle: "Civil Contractor",
      gender: "Male",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&facialHairType=BeardLight&clotheType=GraphicShirt&skinColor=Tanned",
    },
    text: "PCC and coba work was done neatly with proper slope. They're reliable and committed to quality.",
    href: "https://twitter.com/ravi_deshmukh",
  },
  {
    author: {
      name: "Anjali Mehta",
      handle: "Homeowner",
      gender: "Female",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Prescription01&clotheType=ShirtCrewNeck&skinColor=Light",
    },
    text: "VB Enterprises helped us waterproof our home terrace. Zero hassle and total satisfaction!",
    href: "https://twitter.com/anjali_homeowner",
  },
];

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Trusted by Clients Across Major Cities"
      description="Join countless homeowners, contractors, and businesses who trust VB Enterprises for dependable waterproofing, civil works, and complete interior solutions."
      testimonials={testimonials}
    />
  );
}
