class UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]
  def index
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end
end
