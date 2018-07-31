Rails.application.routes.draw do

  # resources :photos do
  #   get 'preview', on: :member
  # end

  # resources :photos do
  #   member do
  #     get 'preview'
  #   end
  # end

  # resource :setting do
  #   member do
  #     get :account
  #     get :password
  #     get :profile
  #     get :reward
  #   end
  # end

  # match "/uploads/:path(![large|lg|md|sm|xs])", to: "home#uploads", via: :get, constraints: {
  #   path: /[\w\d\.\/]+/i
  # }

  # resources :comments
  # devise_for :users, path: 'abc', controllers: {
  #   registrations: :account,
  #   sessions: :sessions,
  #   passwords: :passwords,
  # }
  # resources :demos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'

  # get '/profile', to: 'welcome#user'
  # get '/profile/out', to: 'welcome#out'
end
