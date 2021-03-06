class Admin::MemoSerializer < ApplicationSerializer
   attributes :id, :year_date, :add_date, :calendary_id, :calendary, :event_id, :event, :bind_kind,
              :bond_to_id, :bond_to, :memory, :memory_id, :descriptions, :links, :titles, :memo_orders

   def year_date
      object.year_date
   end

   def memory_id
      object.event.memory_id ;end

   def memory
      object.event.memory.short_name ;end

   def calendary
      object.calendary.name_for(@instance_options[:locales]).text ;end

   def event
      [ object.event.kind_for(locales).text, object.event.type_number ].compact.join( "#" ) ;end

   def bond_to
      object.bond_to&.year_date ;end

   def memo_orders
      ActiveModel::Serializer::CollectionSerializer.new(object.memo_orders, locales: @instance_options[:locales]) ;end

   def titles
      ActiveModel::Serializer::CollectionSerializer.new(object.titles, locales: @instance_options[:locales]) ;end

   def descriptions
      ActiveModel::Serializer::CollectionSerializer.new(object.descriptions, locales: @instance_options[:locales]) ;end

   def links
      ActiveModel::Serializer::CollectionSerializer.new(object.links, locales: @instance_options[:locales]) ;end;end
