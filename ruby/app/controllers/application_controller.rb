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

#get individual items
  get "/developers/:id" do
    developer = Developer.find(params[:id]) 
    developer.to_json, include: :category
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

#create a new developer item
  post '/developers' do
    developer = Developer.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      image_url: params[:image_url],
      experience: params[:experience],
      language_1: params[:language_1],
      language_2: params[:language_2],
      category_id: params[:category_id]
    )
    developer.to_json
  end

#create a new review item
  post '/reviews' do
    review = Review.create(
      review_title: params[:review_title],
      review_desc: params[:review_desc],
      rating: params[:rating],
      user_id: params[:user_id],
      developer_id: params[:developer_id]
    )
    review.to_json
  end

#update (patch) a new review item
  patch '/reviews/:id' do
    review = Review.find(params[:id])
    review.update(
      review_title: params[:review_title],
      review_desc: params[:review_desc],
      rating: params[:rating]
    )
    review.to_json
  end

#delete a review item
   delete "/reviews/:id" do
    review = Review.find(params[:id]) 
    review.destroy
    review.to_json
  end

end
