Rails.application.routes.draw do

  get 'contact_form/send'
  root to: 'home#index'

  post 'comments', to: 'comment#create'
  post 'contact_form', to: 'contact_form#send'

  get 'home/index'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
