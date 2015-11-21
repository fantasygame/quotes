class EmberController < ApplicationController
  skip_before_action :authenticate_user_from_token!

  def index
    render layout: false
  end
end
