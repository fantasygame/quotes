class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :content, :vote_balance
  has_one :user
end
