puts "🌱 Seeding spices..."

# Seed your database here
User.create(
    username: "ndurivo",
    password: "@Ndurivo",
  )

  Developer.create(
    first_name: "Job",
    last_name: "Nduri",
    image_url: "https://user-images.githubusercontent.com/35293767/34953768-88f630a0-fa26-11e7-9589-020d002fcc5b.png",
    experience: 3,
    language_1: "Java",
    language_2: "Kotlin",
    category_id: 1,
  )

  Category.create(
    category_name: "Android Developer"
  )

  Review.create(
    review_title: "Best Developer",
    review_desc: "Builds quality programs within stipulated time",
    rating: 9,
    user_id: 1,
    developer_id: 1,
  )

puts "✅ Done seeding!"
