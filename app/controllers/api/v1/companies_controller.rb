module Api
  module V1
    class CompaniesController < ApplicationController
      def index
        @companies = Company.all
        @companies = Company.by_industry(params[:industry_ids]) if params[:industry_ids]
      end
    end
  end
end
