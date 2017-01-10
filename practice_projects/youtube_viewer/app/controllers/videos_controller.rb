class VideosController < ApplicationController
  def index
    # @videos = Video.order('created_at DESC')
    @videos = Yt::Video.new url: 'https://youtu.be/BPNYv0vd78A'
  end

  def new
    @video = Video.new
  end

  def create
    # @video = Video.new(video_params)
    @video = Yt::Video.new url: 'https://youtu.be/BPNYv0vd78A'
    if @video.save
      puts "did save"
      flash[:success] = @video
      # flash[:success] = 'Video added!'
      redirect_to root_url
    else
      puts "didn't save"
      render :new
    end
  end

  private

  def video_params
    params.require(:video).permit(:link)
  end

end
