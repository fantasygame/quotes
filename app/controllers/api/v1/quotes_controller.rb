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

      def update
        quote = Quote.find(params[:id])
        quote.content = quote_params[:content]
        if quote.save
          head :no_content
        else
          render json: { errors: quote.errors }, status: :unprocessable_entity
        end
      end

      def upvote
        quote = Quote.find(params[:id])
        user = User.find(params[:user_id])
        quote.upvote_from(user)
        render json: { message: 'upvoted', voteBalance: quote.vote_balance }, status: :ok
      end

      def downvote
        quote = Quote.find(params[:id])
        user = User.find(params[:user_id])
        quote.downvote_from(user)
        render json: { message: 'downvoted', voteBalance: quote.vote_balance }, status: :ok
      end

      private

      def quote_params
        params.require(:quote).permit(:content, :user_id)
      end
    end
  end
end
