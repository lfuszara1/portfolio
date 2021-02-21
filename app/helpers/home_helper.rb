# frozen_string_literal: true

module HomeHelper

  def parse_images(img, name)
    hash = img.as_json

    case name
    when 'logo'
      img_logo = img.logo
      hash[:logo] = url_for img_logo
    when 'avatar'
      img_logo = img.avatar
      hash[:avatar] = url_for img_logo
    else
      raise ArgumentError
    end

    hash
  end

end
