module Writers
  class ElementsController < WritersController
    before_action :set_song
    before_action :set_element, only: [:update, :destroy]

    # POST /elements
    def create
      @element = @song.elements.build(element_params)

      if @element.save
        notice = nil
      else
        notice = @element.errors.full_messages.join(". ") << "."
      end
      redirect_to edit_song_path(@song), notice: notice
    end

    # PATCH/PUT /elements/1
    def update
      @element.update(element_params)
      redirect_to edit_song_path(@element.song)
    end

    # DELETE /elements/1
    def destroy
      @element.destroy
      redirect_to elements_url, notice: 'Element was successfully destroyed.'
    end

    private

      def set_song
        @song = current_writer.songs.find(params[:song_id])
      end
      # Use callbacks to share common setup or constraints between actions.
      def set_element
        @element = @song.elements.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def element_params
        params.require(:element).permit(:element_type, :content)
      end
  end
end