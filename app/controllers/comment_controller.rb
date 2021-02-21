class CommentController < ApplicationController

  def create
    Comment.create(comment_params)
  end

  private

  def comment_params
    params.require(:comment).permit(:avatar, :name, :description, :stars)
  end

end
