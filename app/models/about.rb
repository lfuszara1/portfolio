class About < ApplicationRecord

  has_one_attached :avatar

  validates_presence_of :avatar
  validates_presence_of :name
  validates_length_of :name, in: 3...255
  validates_presence_of :description

end
