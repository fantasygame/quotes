module Api
  module V1
    class UsersController < ApplicationController
      def show
        user = params[:id] == 'current' ? current_user : User.find(params[:id])
        render json: { users: [user] }
      end

      def index
        users =
          if params.key?(:current_user) && params[:current_user] == 'true'
            [current_user]
          else
            User.all
          end
        render json: { users: users }
      end
    end
  end
end
