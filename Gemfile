source 'https://rubygems.org'
ruby '2.1.4'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', github: 'rails/rails'
gem 'pg'
#NOTE http://mikecoutermarsh.com/2013/09/22/using-hstore-with-rails-4/
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Widelinks makes following links in your web application faster.
gem 'wiselinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

gem 'param_protected'

gem 'globalize'

gem "figaro"

gem 'therubyracer', platform: :ruby

# Slim html renderer
gem 'slim-rails', github: 'slim-template/slim-rails'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

group :development do
#   gem 'capistrano-rails'
end

group :development, :test do
   gem "factory_girl_rails"
   gem 'pry-rails'
   gem 'pry_debug'
   gem 'less-rails-bootstrap'
end

group :test do
   gem 'cucumber-rails', require: nil
   gem 'shoulda'
   gem 'simplecov'
   gem 'database_cleaner'
   gem "launchy"
   gem "capybara"
   gem "email_spec"
end


