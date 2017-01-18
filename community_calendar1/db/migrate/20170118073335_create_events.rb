class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :host
      t.string :location
      t.date :date
      t.datetime :timestart
      t.string :category

      t.timestamps
    end
  end
end
