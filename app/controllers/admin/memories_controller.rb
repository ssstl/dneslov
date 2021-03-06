class Admin::MemoriesController < Admin::CommonController
   has_scope :d, only: %i(index), allow_blank: false, type: :array do |_, scope, value|
      scope.d(*value) ;end
   has_scope :q, only: %i(index), type: :array
   has_scope :c, only: %i(index), type: :array

   def all
      @memories = model.t(params[:t])

      respond_to do |format|
         format.json { render :index, json: @memories.limit(500),
                                      locales: @locales,
                                      serializer: Admin::AutocompleteSerializer,
                                      total: @memories.count,
                                      each_serializer: Admin::ShortMemorySerializer }
      end;end

   def icons
      @icons = model.icons.t(params[:t])

      respond_to do |format|
         format.json { render :index, json: @icons.limit(500),
                                      locales: @locales,
                                      serializer: Admin::AutocompleteSerializer,
                                      total: @icons.count,
                                      each_serializer: Admin::ShortMemorySerializer }
      end;end

   protected

   def model
      Memory ;end

   def permitted_params
      params.require( :memory ).permit(
         :id, :covers_to_id, :bond_to_id, :short_name, :council, :quantity, :base_year,
         slug_attributes: [:id, :text],
         memory_names_attributes: [:id, :name_id, :state, :feasible, :ored, :_destroy],
         events_attributes: [
            :id, :happened_at, :type, :person_name, :type_number,
            :about_string, :tezo_string, :council, :place_id, :item_id, :_destroy ],
         wikies_attributes: [:id, :url, :language_code, :alphabeth_code, :_destroy],
         beings_attributes: [:id, :url, :language_code, :alphabeth_code, :_destroy],
         paterics_attributes: [:id, :url, :language_code, :alphabeth_code, :_destroy],
         notes_attributes: [:id, :text, :language_code, :alphabeth_code, :_destroy],
         descriptions_attributes: [:id, :text, :language_code, :alphabeth_code, :_destroy] ) ;end

   def object_serializer
      Admin::MemorySerializer ;end

   def objects_serializer
      MemoriesSerializer ;end;end
