class Technology < ApplicationRecord

  has_one_attached :logo

  validates_presence_of :logo
  validates_presence_of :name
  validates_length_of :name, in: 3...255
  validates_presence_of :description
  validates_presence_of :level
  validates_numericality_of :level

  scope :order_by_level, -> { order(level: :asc) }

end
