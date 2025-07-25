export const defaultPlanId = "starter"

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for beginning your wellness journey with daily guidance and motivation.",
    price: "$5",
    priceIntervalName: "per month",
    stripe_price_id: "price_starter_monthly",
    stripe_product_id: "prod_starter",
    features: [
      "Full access to all daily blog articles",
      "Weekly 'The Daily Drive' newsletter (in-site & email)",
      "Save & bookmark favorite articles on your profile",
      "Basic access to meal plan & workout PDF downloads"
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Enhanced tools and exclusive content to accelerate your wellness progress.",
    price: "$15",
    priceIntervalName: "per month",
    stripe_price_id: "price_1NkdZCHMjzZ8mGZnRSjUm4yA",
    stripe_product_id: "prod_OXj1CcemGMWOlU",
    features: [
      "Everything in Starter, plus:",
      "3x weekly newsletter with exclusive content",
      "Interactive meal planner & workout tracker (web-based)",
      "Access to premium video workouts & guided meditation",
      "Personalized progress dashboard with stats and streaks"
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate",
    description: "Complete wellness transformation with personalized coaching and exclusive access.",
    price: "$30",
    priceIntervalName: "per month",
    stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
    stripe_product_id: "prod_OXj20YNpHYOXi7",
    features: [
      "Everything in Pro, plus:",
      "Custom monthly goal setting & reminders (via website + email)",
      "Access to exclusive deep-dive courses (nutrition, mindset, fitness)",
      "Priority content requests & early beta access to new features",
      "Download personalized PDF reports of your progress & plans"
    ],
  },
]
