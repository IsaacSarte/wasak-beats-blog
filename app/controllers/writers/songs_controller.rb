module Writers
  class SongsController < WritersController
    before_action :set_song, only: [:show, :edit, :update, :destroy]

    # GET /songs
    def index
      @songs = current_writer.songs
    end

    def show
    end

    # GET /songs/new
    def new
      @song = current_writer.songs.build
    end

    # GET /songs/1/edit
    def edit
      @paragraph = @song.elements.build(element_type: 'paragraph')
    end

    # POST /songs
    def create
      @song = current_writer.songs.build(song_params)

      if @song.save
        redirect_to @song, notice: 'Song was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /songs/1
    def update
      if @song.update(song_params)
        redirect_to @song, notice: 'Song was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /songs/1
    def destroy
     @song.destroy
     redirect_to songs_url, notice: 'Song was successfully Deleted'
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_song
        @song = current_writer.songs.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def song_params
        params.require(:song).permit(:title, :description)
      end
  end
end