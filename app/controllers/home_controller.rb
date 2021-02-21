class HomeController < ApplicationController

  before_action :before_render

  def index
  end

  private

  def before_render
    @about = About.first()
    @technologies = Technology.order_by_level()
    @projects = Project.all()
    @comments = Comment.accepted().ordered_by_priority()
  end

end
