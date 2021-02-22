class CommentController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.valid?
    p @comment.errors.full_messages
    @comment.save
  end

  private

  def comment_params
    params.require(:comment).permit(:avatar, :name, :description, :stars)
  end

end
