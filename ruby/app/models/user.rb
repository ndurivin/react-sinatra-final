
class User < ActiveRecord::Base
    has_many :reviews
    has_many :developers, through: :reviews
end