class Quote < ActiveRecord::Base
  acts_as_votable
  belongs_to :user

  def vote_balance
    get_upvotes.count - get_downvotes.count
  end
end
