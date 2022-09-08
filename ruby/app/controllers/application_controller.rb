class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "This is my new web application! yeeey!!!" }.to_json
  end

end
