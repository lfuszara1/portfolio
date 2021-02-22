class Comment < ApplicationRecord

  has_one_attached :avatar

  validates_presence_of :avatar
  validates_presence_of :name
  validates_length_of :name, in: 3...255
  validates_presence_of :description
  validates_length_of :description, minimum: 100
  validates_presence_of :stars
  validates_numericality_of :stars
  validates_inclusion_of :stars, in: (1..6)

  scope :accepted, -> { where(accepted?: true) }
  scope :ordered_by_priority, -> { order(priority: :asc) }

end
