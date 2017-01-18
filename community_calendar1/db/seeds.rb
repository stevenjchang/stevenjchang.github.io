# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

3.times do
  Event.create([{
    title: Faker::Book.title,
    host: Faker::Company.name,
    location: Faker::Address.city,
    date: Faker::Date.forward(14),
    timestart: Faker::Time.forward(14, :evening)
    # category:
    }])
end
