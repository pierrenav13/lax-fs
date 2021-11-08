Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  # root to: 'messages#root'
  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :channels, only: [:create, :update, :show, :index, :destroy] do
      resources :users, only: [:index]
      resources :subscriptions, only: [:create, :index]
      resources :messages, only: [:create]
    end
    resources :messages, only: [:index, :show, :post, :patch, :delete]
    resource :session, only: [:create, :destroy]
  end
end
