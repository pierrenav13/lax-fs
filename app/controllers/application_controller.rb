class ApplicationController < ActionController::Base
    helper_method :logged_in?, :current_user, :main_channel

    def main_channel
        @main ||= Channel.find_by(name: "general")
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        current_user = nil
    end

    def logged_in?
        !!current_user
    end

end
