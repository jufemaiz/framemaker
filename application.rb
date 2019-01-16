# frozen_string_literal: true

require 'rubygems'
require 'sinatra'
# require 'sinatra-static-assets'
require 'json'

require 'haml'
set :haml, format: :html5
require 'sassc'
require 'coffee-script'
require './lib/partials'

# ----------------------------------
# Homepage
# ----------------------------------
get '/' do
  haml :index
end

# ----------------------------------
# Homepage
# ----------------------------------
get '/info' do
  haml :index
end

# ----------------------------------
# SCSS Custom Styling
# ----------------------------------
get '/stylesheets/application.css' do
  content_type :css
  SassC::Engine.new("@import 'views/application.css.scss'", style: :compressed)
               .render
end

# ----------------------------------
# Coffee makes scripting fun!
# ----------------------------------
get %r{\/js\/([a-zA-Z0-9_\/\-\.]+\.coffee)\.js} do |filename|
  content_type :js
  base_name = File.join(
    File.dirname(__FILE__),
    'public',
    'javascripts',
    filename << '.js'
  )
  puts base_name
  if File.exist? base_name
    CoffeeScript.compile File.open(base_name, 'r', &:read)
  else
    File.open(base_name + '.js', 'r', &:read)
  end
end
