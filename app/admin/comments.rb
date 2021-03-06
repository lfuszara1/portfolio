ActiveAdmin.register Comment do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :avatar, :name, :description, :stars, :priority, :accepted?

  index do
    column :avatar do |e|
      e.avatar.blob
    end
    column :name
    column :description
    column :stars
    column :priority
    column :accepted?

    actions
  end

  form html: { enctype: "multipart/form-data" } do |f|
    f.inputs "Details" do
      f.input :avatar, as: :file
      f.input :name
      f.input :description, as: :quill_editor
      f.input :stars
      f.input :priority
      f.input :accepted?
    end
    f.actions
  end

end
