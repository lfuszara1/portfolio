class HomeController < ApplicationController

  before_action :load_about, :load_technologies, :load_projects, :load_comments

  def index
  end

  private

  def load_about
    about = About.with_attached_avatar.first
    @about = helpers.parse_images(about, 'avatar')
  end

  def load_technologies
    technologies = Technology.with_attached_logo.order_by_level
    @technologies = technologies.map do |technology|
      helpers.parse_images technology, 'logo'
    end
  end


  def load_projects
    projects = Project.with_attached_logo.all
    @projects = projects.map do |project|
      helpers.parse_images project, 'logo'
    end
  end

  def load_comments
    comments = Comment.with_attached_avatar.accepted.ordered_by_priority
    @comments = comments.map do |comment|
      helpers.parse_images comment, 'avatar'
    end
  end

end
