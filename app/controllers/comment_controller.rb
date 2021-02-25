class CommentController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.valid?
      @comment.save
      render json: @comment, status: 201
    else
      render json: { message: "Validation failed", errors: @comment.errors.full_messages }, status: 400
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:avatar, :name, :description, :stars)
  end

end
