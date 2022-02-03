class Post < ApplicationRecord
    validates :title, presence: true
    validates :lyric, presence: true, length: {minimum: 10}
end