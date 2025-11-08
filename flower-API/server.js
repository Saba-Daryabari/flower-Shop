import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// سرو کردن فایل‌های استاتیک (تصاویر)
app.use(express.static("public"));

// دیتای ۲۵ محصول با تصاویر واقعی
const products = [
  // ROSES
  {
    id: 1,
    title: "Red Rose",
    category: "Roses",
    price: 120,
    image: "/images/red-rose.jpg",
    description: "Classic romantic red rose.",
    variants: [
      { size: "Small", stock: 12 },
      { size: "Medium", stock: 6 },
      { size: "Large", stock: 3 },
    ],
  },
  {
    id: 2,
    title: "White Rose",
    category: "Roses",
    price: 110,
    image: "/images/white-rose.jpg",
    description: "Pure white rose, symbol of peace.",
    variants: [
      { size: "Small", stock: 10 },
      { size: "Medium", stock: 4 },
    ],
  },
  {
    id: 3,
    title: "Yellow Rose",
    category: "Roses",
    price: 100,
    image: "/images/yellow-rose.jpg",
    description: "Bright yellow rose for friendship.",
    variants: [
      { size: "Small", stock: 15 },
      { size: "Large", stock: 5 },
    ],
  },
  {
    id: 4,
    title: "Mixed Roses Bouquet",
    category: "Bouquet",
    price: 260,
    image: "/images/mixed-roses.jpg",
    description: "Colorful mixed rose bouquet.",
    variants: [
      { size: "Medium", stock: 6 },
      { size: "Large", stock: 2 },
    ],
  },

  // TULIPS
  {
    id: 5,
    title: "White Tulip",
    category: "Tulips",
    price: 90,
    image: "/images/white-tulip.jpg",
    description: "Simple and elegant white tulip.",
    variants: [
      { size: "Small", stock: 9 },
      { size: "Large", stock: 3 },
    ],
  },
  {
    id: 6,
    title: "Pink Tulip",
    category: "Tulips",
    price: 95,
    image: "/images/pink-tulip.jpg",
    description: "Soft pink tulip for warm feelings.",
    variants: [
      { size: "Small", stock: 10 },
      { size: "Medium", stock: 4 },
    ],
  },
  {
    id: 7,
    title: "Yellow Tulip",
    category: "Tulips",
    price: 88,
    image: "/images/yellow-tulip.jpg",
    description: "Cheerful and bright yellow tulip.",
    variants: [
      { size: "Small", stock: 14 },
      { size: "Large", stock: 4 },
    ],
  },

  // LILIES
  {
    id: 8,
    title: "Orange Lily",
    category: "Lilies",
    price: 140,
    image: "/images/orange-lily.jpg",
    description: "Vibrant orange lily.",
    variants: [{ size: "Medium", stock: 7 }],
  },
  {
    id: 9,
    title: "White Lily",
    category: "Lilies",
    price: 150,
    image: "/images/white-lily.jpg",
    description: "Calm and graceful white lily.",
    variants: [
      { size: "Medium", stock: 5 },
      { size: "Large", stock: 2 },
    ],
  },

  // ORCHIDS
  {
    id: 10,
    title: "White Orchid",
    category: "Orchids",
    price: 170,
    image: "/images/white-orchid.jpg",
    description: "Elegant and rare white orchid.",
    variants: [{ size: "One Size", stock: 5 }],
  },
  {
    id: 11,
    title: "Purple Orchid",
    category: "Orchids",
    price: 175,
    image: "/images/purple-orchid.jpg",
    description: "Luxurious and exotic purple orchid.",
    variants: [{ size: "One Size", stock: 4 }],
  },

  // PEONY
  {
    id: 12,
    title: "Pink Peony",
    category: "Peony",
    price: 160,
    image: "/images/pink-peony.jpg",
    description: "Fluffy and romantic pink peony.",
    variants: [
      { size: "Small", stock: 8 },
      { size: "Large", stock: 2 },
    ],
  },
  {
    id: 13,
    title: "White Peony",
    category: "Peony",
    price: 165,
    image: "/images/white-peony.jpg",
    description: "Soft and elegant white peony.",
    variants: [
      { size: "Small", stock: 5 },
      { size: "Large", stock: 1 },
    ],
  },

  // DAHLIA
  {
    id: 14,
    title: "Red Dahlia",
    category: "Dahlia",
    price: 140,
    image: "/images/red-dahlia.jpg",
    description: "Bold deep red dahlia.",
    variants: [{ size: "Medium", stock: 6 }],
  },
  {
    id: 15,
    title: "Yellow Dahlia",
    category: "Dahlia",
    price: 135,
    image: "/images/yellow-dahlia.jpg",
    description: "Bright and sunny yellow dahlia.",
    variants: [{ size: "Medium", stock: 7 }],
  },

  // GERBERA
  {
    id: 16,
    title: "Red Gerbera",
    category: "Gerbera",
    price: 85,
    image: "/images/red-gerbera.jpg",
    description: "Joyful red gerbera flower.",
    variants: [{ size: "One Size", stock: 12 }],
  },
  {
    id: 17,
    title: "Yellow Gerbera",
    category: "Gerbera",
    price: 82,
    image: "/images/yellow-gerbera.jpg",
    description: "Vibrant yellow gerbera.",
    variants: [{ size: "One Size", stock: 11 }],
  },

  // CARNATION
  {
    id: 18,
    title: "Red Carnation",
    category: "Carnation",
    price: 60,
    image: "/images/red-carnation.jpg",
    description: "Classic red carnation.",
    variants: [{ size: "One Size", stock: 14 }],
  },
  {
    id: 19,
    title: "Pink Carnation",
    category: "Carnation",
    price: 62,
    image: "/images/pink-carnation.jpg",
    description: "Lovely pink carnation.",
    variants: [{ size: "One Size", stock: 10 }],
  },

  // HYACINTH
  {
    id: 20,
    title: "Blue Hyacinth",
    category: "Hyacinth",
    price: 98,
    image: "/images/blue-hyacinth.jpg",
    description: "Fragrant blue hyacinth.",
    variants: [{ size: "One Size", stock: 8 }],
  },
  {
    id: 21,
    title: "Yellow Hyacinth",
    category: "Hyacinth",
    price: 95,
    image: "/images/yellow-hyacinth.jpg",
    description: "Fresh yellow hyacinth.",
    variants: [{ size: "One Size", stock: 7 }],
  },

  // LAVENDER / DAISY / SUNFLOWER / BLUEBELL
  {
    id: 22,
    title: "Lavender",
    category: "Herbal",
    price: 75,
    image: "/images/lavender.jpg",
    description: "Relaxing fresh lavender.",
    variants: [{ size: "Bundle", stock: 9 }],
  },
  {
    id: 23,
    title: "Daisy",
    category: "Wildflower",
    price: 50,
    image: "/images/daisy.jpg",
    description: "Simple and cute daisy.",
    variants: [{ size: "One Size", stock: 12 }],
  },
  {
    id: 24,
    title: "Sunflower",
    category: "Sunflower",
    price: 120,
    image: "/images/sunflower.jpg",
    description: "Bright sunflower that stands out.",
    variants: [{ size: "Large", stock: 5 }],
  },
  {
    id: 25,
    title: "Bluebell",
    category: "Wildflower",
    price: 70,
    image: "/images/bluebell.jpg",
    description: "Soft and magical bluebell flower.",
    variants: [{ size: "Small", stock: 11 }],
  },
];

// GET محصولات با pagination و search
app.get("/api/products", (req, res) => {
  const { page = 1, limit = 20, search = "" } = req.query;

  let filtered = products;
  if (search) {
    filtered = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  const start = (page - 1) * limit;
  const end = start + Number(limit);
  const paginated = filtered.slice(start, end);

  res.json({
    page: Number(page),
    limit: Number(limit),
    total: filtered.length,
    data: paginated,
  });
});

// تست ساده
app.get("/", (req, res) => {
  res.send("Flower API is working ✅");
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`🚀 API running on http://localhost:${PORT}`)
);
