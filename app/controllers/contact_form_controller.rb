class ContactFormController < ApplicationController

  def send(token)
    ContactFormMailer.contact_form_email(send_params).deliver_later
  end

  private

  def send_params
    params.require(:contact_form).permit(:name, :content, :email)
  end

end
