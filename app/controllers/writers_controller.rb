class WritersController < ApplicationController
    before_action :authenticate_writer!

    layout 'writers'
end