Rails.application.routes.draw do
  # get 'kittens/resources:kitten'
  resources :kittens
  root 'kittens#index'
  # root 'KittensController#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
