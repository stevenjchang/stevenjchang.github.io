class KittensController < ApplicationController
  # before_action :find_kitten
  def index
    @kittens = Kitten.all
  end

  # def show
  #   @kitten = Kitten.find(params)
  # end
  #
  # def new
  #   @kitten = Kitten.new(params)
  # end
  #
  # def delete
  #   @kitten = Kitten.find(params)
  #   @kitten.destroy
  #   redirect_to "/"
  # end

  private

    def find_kitten
      @kitten = Kitten.find(params[:id])
    end

end
