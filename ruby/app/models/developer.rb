
class Developer < ActiveRecord::Base
    belongs_to :category
    has_many :reviews
    
end