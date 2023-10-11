class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.boolean :admin, default: false
      t.string :email
      t.string :password_digest
      t.timestamps
    end
  end
end
