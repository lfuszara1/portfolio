class Project < ApplicationRecord

  has_one_attached :logo

  validates_presence_of :logo
  validates_presence_of :name
  validates_length_of :name, in: 3...255
  validates_presence_of :description

end
