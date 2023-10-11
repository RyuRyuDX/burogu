Rails.application.routes.draw do
  
  root 'tops#index'

  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  resources :posts
  resources :users, only: [:new, :create]

  resources :sessions, only: [:new, :create, :destroy]
  get 'login', to: 'sessions#new'
  delete 'logout', to: 'sessions#destroy'
end
