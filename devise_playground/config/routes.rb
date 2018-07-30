Rails.application.routes.draw do
  devise_for :users
  # resources :demos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'

  get '/profile', to: 'welcome#user'
  get '/profile/out', to: 'welcome#out'
end
