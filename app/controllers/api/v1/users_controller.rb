module Api
  module V1
    class UsersController < ApplicationController
      def show
        user = params[:id] == 'current' ? current_user : User.find(params[:id])
        render json: user
      end
    end
  end
end
