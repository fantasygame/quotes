module Api
  module V1
    class QuotesController < ApplicationController
      def index
        @quotes = Quote.all

        render json: @quotes
      end

      def show
        render json: Quote.find(params[:id])
      end
    end
  end
end
