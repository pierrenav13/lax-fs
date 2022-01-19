Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  # root to: 'messages#root'
  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: {format: :json} do
    # resources :users, only: [:create]
    # resources :channels, only: [:create, :update, :show, :index, :destroy] do
    #   resources :users, only: [:index]
    #   resources :subscriptions, only: [:create, :index]
    #   resources :messages, only: [:index]
    # end
    # resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:create, :index, :update, :destroy]
    resources :channels, only: [:create, :index, :destroy, :update, :show]
    resources :subscriptions, only: [:create, :destroy]
  end
end
