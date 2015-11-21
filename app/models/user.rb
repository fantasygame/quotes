class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  enum role: [:user, :vip, :admin]
  after_initialize :set_default_role, if: :new_record?
  before_save :ensure_authentication_token

  def set_default_role
    if User.count == 0
      self.role ||= :admin
    else
      self.role ||= :user
    end
  end

  def ensure_authentication_token
    return if authentication_token.present?
    self.authentication_token = generate_authentication_token
  end

  private

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.find_by(authentication_token: token)
    end
  end
end
