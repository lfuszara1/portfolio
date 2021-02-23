class ContactFormMailer < ApplicationMailer

  default from: 'lukasz@fuszara.pl'

  def contact_form_email(params)
    @params = params
    mail(to: 'lukasz@fuszara.pl', subject: "Email od #{@params['name']}")
  end

end
