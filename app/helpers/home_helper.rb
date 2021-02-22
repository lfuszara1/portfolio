# frozen_string_literal: true

module HomeHelper

  def parse_images(img, name)
    hash = img.as_json

    img_logo = img.send(name)
    hash[name] = url_for img_logo

    hash
  end

end
