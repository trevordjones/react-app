module Api
  module V1
    class IndustriesController < ApplicationController
      def index
        @industries = Industry.all
      end
    end
  end
end
