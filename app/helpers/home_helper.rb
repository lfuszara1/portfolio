# frozen_string_literal: true

module HomeHelper

  def parse_images(element, name)
    hash = element.as_json

    img = element.send(name)
    hash[name] = url_for img

    hash
  end

end
