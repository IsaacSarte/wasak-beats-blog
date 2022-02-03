class Song < ApplicationRecord
  belongs_to :writer

  has_many :elements, dependent: :destroy
end
