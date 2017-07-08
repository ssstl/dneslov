require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Dneslov
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'
    config.autoload_paths << Rails.root.join('lib')

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    config.i18n.default_locale = :ru

    config.paths['db/migrate'] = Bukovina::Engine.paths['db/migrate'].existent

    config.npm.enable_watch = Rails.env.development?

    config.npm.install = ['npm install']

    # Command to build production assets
    config.npm.build = ['npm run build']

    # Command to start a file watcher
    config.npm.watch = ['npm run start']

    config.npm.install_on_asset_precompile = true

    config.npm.install_on_rails_server = true
  end
end
