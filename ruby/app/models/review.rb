
class Review < ActiveRecord::Base 
    belongs_to :developer
    belongs_to :user
end