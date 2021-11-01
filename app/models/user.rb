

class User < ApplicationRecord
    #FIGVAPER

    validates :username, :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :username, uniqueness: true

    after_initialize :ensure_session_token
    attr_reader :password

    def self.generate_session_token
        return SecureRandom.urlsafe_base64(16)
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end


end