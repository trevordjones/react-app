module Api
  module V1
    class CompaniesController < ApplicationController
      def index
        @limit = params[:limit]
        @companies = Company.all
        @companies = @companies.by_city(params[:city]) if params[:city]
        @companies = @companies.by_industry(params[:industry_ids]) if params[:industry_ids]
      end
      
      def city_search
        @companies = Company.by_city(params[:text]) if params[:text]
      end
    end
  end
end
