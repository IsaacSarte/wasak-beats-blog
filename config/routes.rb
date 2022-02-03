Rails.application.routes.draw do
  resources :elements
  
  devise_for :writers
  # get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"

  scope module: 'writers' do
    resources :songs do
      resources :elements
    end
  end

  # public posts routes using model
  get '/posts' => 'posts#index'
  get '/posts/new' => 'posts#new'

  post '/posts' => 'posts#create', as: 'post_create'

  get '/posts/edit/:id' => 'posts#edit', as: 'post_edit'
  put '/posts/:id' => 'posts#update', as: 'post_update'

end