ActiveAdmin.register Project do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :logo, :name, :description

  index do
    column :logo do |e|
      e.logo.blob
    end
    column :name
    column :description

    actions
  end

  form html: { enctype: "multipart/form-data" } do |f|
    f.inputs "Details" do
      f.input :logo, as: :file
      f.input :name
      f.input :description, as: :quill_editor
    end
    f.actions
  end
  
end
