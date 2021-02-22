ActiveAdmin.register About do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :description, :avatar, :avatar

  index do
    column :avatar do |e|
      e.avatar.blob
    end
    column :name
    column :description

    actions
  end

  form multiple: true do |f|
    f.inputs "Details" do
      f.input :avatar, as: :file
      f.input :name
      f.input :description, as: :quill_editor
    end
    f.actions
  end

end
