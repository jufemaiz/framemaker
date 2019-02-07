# frozen_string_literal: true

# Ruby Version
ruby '2.6.1'

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

source 'https://rubygems.org' do
  gem 'coffee-script'
  gem 'haml'
  gem 'rack', '>= 2.0.6'
  gem 'sassc'
  gem 'sinatra'
  gem 'sinatra-static-assets'

  group :development do
    gem 'haml_lint', require: false
    gem 'rerun'
    gem 'rubocop'
  end
end
