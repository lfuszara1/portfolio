ActiveAdmin.register About do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :avatar, :name, :description

  index do
    column :avatar
    column :name
    column :description

    actions
  end

  form html: { enctype: "multipart/form-data" } do |f|
    f.inputs "Details" do
      f.input :avatar, as: :file
      f.input :name
      f.input :description
    end
    f.actions
  end
  
end
