# frozen_string_literal: true

module HomeHelper

  def parse_images(img, name)
    hash = img.as_json
    name_sym = name.to_sym

    img_logo = img.send(name_sym)
    hash[name_sym] = url_for img_logo

    hash
  end

end
