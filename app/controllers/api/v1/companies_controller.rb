module Api
  module V1
    class CompaniesController < ApplicationController
      def index
        @companies = Company.all
      end
    end
  end
end
