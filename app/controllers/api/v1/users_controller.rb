module Api
  module V1
    class UsersController < ApplicationController
      def show
        render json: { users: [User.find(params[:id])] }
      end

      def index
        render json: { users: User.all }
      end
    end
  end
end
