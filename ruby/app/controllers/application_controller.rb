class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  #get requests
  #get all lists
  get "/developers" do
    developers = Developer.all 
    developers.to_json
  end

  get "/users" do
    users = User.all 
    users.to_json
  end

  get "/reviews" do
    reviews = Review.all 
    reviews.to_json
  end

  get "/categories" do
    categories = Category.all 
    categories.to_json
  end

  #get individual item
  get "/developers/:id" do
    developers = Developer.find(params[:id]) 
    developers.to_json
  end

  get "/users/:id" do
    user = User.find(params[:id]) 
    user.to_json
  end

  get "/reviews/:id" do
    review = Review.find(params[:id]) 
    review.to_json
  end
  get "/categories/:id" do
    category = Category.find(params[:id]) 
    category.to_json
  end

  # post requests

  # 


end
