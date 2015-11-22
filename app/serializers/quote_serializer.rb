class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :content, :vote_balance, :user_id
  # has_one :user
end
