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

      def create
        quote = Quote.new(quote_params)
        if quote.save
          render json: quote, status: :created
        else
          render json: { errors: quote.errors }, status: :unprocessable_entity
        end
      end

      private

      def quote_params
        params.require(:quote).permit(:content, :user_id)
      end
    end
  end
end
